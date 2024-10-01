
import os
import shutil
import json

root_folder = '/home/agamurian/gits/kerka_new/src/routes/events/'

for root, dirs, files in os.walk(root_folder):
    for file in files:
        filepath = os.path.join(root, file)
        if filepath.endswith('svelte'):
            shutil.move(filepath, filepath.replace('.svelte', '.svx'))
