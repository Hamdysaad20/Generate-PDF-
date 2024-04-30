import asyncio
from pyppeteer import launch
import os
import pipreqs

async def get_html_from_js(browser, js_file_path, css_directory):
    page = await browser.newPage()
    try:
        await page.goto('about:blank')
        
        # Validate and add CSS files
        css_files = [file for file in os.listdir(css_directory) if file.endswith('.css')]
        # print(f"Loading {len(css_files)} CSS files.")
        for css_file in css_files:
            css_path = os.path.join(css_directory, css_file)
            await page.addStyleTag({'path': css_path})
        
        # print(f"Processing JS file: {js_file_path}")
        await page.addScriptTag({'path': js_file_path})
        html_content = await page.evaluate('''() => document.documentElement.outerHTML''')
        # print(f"Successfully processed {js_file_path}")
    except Exception as e:
        print(f"An error occurred while processing {js_file_path}: {e}")
        html_content = ""
    await page.close()
    return html_content

async def process_js_files(js_directory, css_directory):
    if not os.path.exists(js_directory) or not os.path.exists(css_directory):
        print("JS or CSS directory does not exist.")
        return ""
    
    js_files = [file for file in os.listdir(js_directory) if file.endswith('.js')]
    print(f"Found {len(js_files)} JS files.")
    js_files.sort(key=lambda x: int(x.split("script")[1].split(".js")[0]) if x.split("script")[1].split(".js")[0].isdigit() else 0)
    # print(js_files)
    if not js_files:
        print("No JS files to process.")
        return ""
    
    browser = await launch()
    html_outputs = []
    processed_files = set() # To track already processed files and avoid duplicates
    
    for js_file in js_files:
        if js_file not in processed_files:
            js_file_path = os.path.join(js_directory, js_file)
            html_output = await get_html_from_js(browser, js_file_path, css_directory)
            html_outputs.append(html_output)
            processed_files.add(js_file)
    
    await browser.close()
    return "".join(html_outputs)

# Main execution starts here
js_directory = './static/js/'
css_directory = './static/css/'
html_output = asyncio.get_event_loop().run_until_complete(process_js_files(js_directory, css_directory))

# Validate the merged HTML content
if html_output:
    output_file_path = os.path.join(os.getcwd(), 'output.html')
    with open(output_file_path, 'w') as file:
        file.write(html_output)
    print(f"The merged HTML content has been saved to {output_file_path}")
    # Format the output file using Prettier
    os.system(f"npx prettier --write {output_file_path}")
else:
    print("Failed to generate HTML content.")
