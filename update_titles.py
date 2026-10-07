import os
import re

def update_titles_in_directory(root_dir):
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith((".html", ".htm")):
                filepath = os.path.join(subdir, file)
                
                # Get filename without extension
                filename_without_ext = os.path.splitext(file)[0]
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    # Regex to find <title> tag and replace its inner text
                    # We use re.IGNORECASE and re.DOTALL to handle variations
                    new_content = re.sub(
                        r'<title>.*?</title>', 
                        f'<title>{filename_without_ext}</title>', 
                        content, 
                        flags=re.IGNORECASE | re.DOTALL
                    )
                    
                    # If content actually changed, write it back
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        # Uncomment to debug:
                        # print(f"Updated title for {file}")
                        
                except Exception as e:
                    pass # Ignore read/write errors for now

if __name__ == "__main__":
    root_dir = r"d:\TKLTWEB_247480201079"
    update_titles_in_directory(root_dir)
