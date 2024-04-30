import os
import pytest
from generator import get_html_from_js, process_js_files
import asyncio
from pyppeteer import launch

@pytest.mark.asyncio
async def test_get_html_from_js_invalid(browser, tmp_path):
    # Given a JS file with invalid syntax and a CSS file
    js_file = tmp_path / "invalid_script.js"
    css_dir = tmp_path / "css"
    css_file = css_dir / "style.css"
    
    os.makedirs(css_dir)
    js_file.write_text("document.documentElement.style.backgroundColor = 'red'; invalid code;")
    css_file.write_text("body { background-color: blue; }")

    # When get_html_from_js is called
    html_output = await get_html_from_js(browser, str(js_file), str(css_dir))
    
    # Then
    assert "Error" in html_output
    print("Test 'test_get_html_from_js_invalid' passed.")


@pytest.mark.asyncio
async def test_process_js_files_no_css_files(tmp_path):
    # Given a JS directory with no CSS files
    js_directory = tmp_path / "js"
    os.makedirs(js_directory)
    
    # When process_js_files is called
    output = await process_js_files(str(js_directory), "non_existing_dir")
    
    # Then
    assert output == ""
    print("Test 'test_process_js_files_no_css_files' passed.")


@pytest.mark.asyncio
async def e2e_test_process_js_files(tmp_path):
    # Given a valid JS directory and a valid CSS directory
    js_directory = tmp_path / "js"
    css_directory = tmp_path / "css"
    os.makedirs(js_directory)
    os.makedirs(css_directory)
    
    js_file = js_directory / "script.js"
    css_file = css_directory / "style.css"
    
    js_file.write_text("document.documentElement.style.backgroundColor = 'red';")
    css_file.write_text("body { background-color: blue; }")

    # When process_js_files is called
    output = await process_js_files(str(js_directory), str(css_directory))
    
    # Then
    assert "backgroundColor" in output
    print("Test 'e2e_test_process_js_files' passed.")
