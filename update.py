import json
import urllib3

url = "https://api.github.com/repos/Liplum/CyberIO/releases/latest"
http = urllib3.PoolManager()
release_raw = http.request("GET", url).data
release = json.loads(release_raw)
tag = release["tag_name"]
print(tag)
