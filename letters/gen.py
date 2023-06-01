import shutil

for i in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
	shutil.move(f"letter{i}.html", f"letter{i}")
	print(f"Done moving letter{i}.html to letter{i}")
