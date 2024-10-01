import os
import shutil
import json

root_folder = '/home/agamurian/gits/kerka_new/src/routes/events/'

for file in os.listdir(root_folder):
    if file.endswith('md'):
        filename, ext = os.path.split(file)[-1].split('.')[0] , os.path.split(file)[-1].split('.')[1]
        os.mkdir(filename.replace(ext, ''))
        shutil.copy(file, os.path.join(root_folder, filename.replace(ext, ''), '+page.svelte'))
