from bs4 import BeautifulSoup
import requests
import json

def urls(prompt):
    params = {
        "q": prompt,
        "hl": "en",
        "gl": "uk",
        "start": 0,
        "num": 2
    }

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }

    page_limit = 10
    page_num = 0

    data = []

    while True:
        page_num += 1

        try:
            html = requests.get("https://www.google.com/search", params=params, headers=headers, timeout=30)
            soup = BeautifulSoup(html.text, 'lxml')

            for result in soup.select(".tF2Cxc"):
                title = result.select_one(".DKV0Md").text
                try:
                    snippet = result.select_one(".lEBKkf span").text
                except:
                    snippet = None
                link = result.select_one(".yuRUbf a")["href"]  # Corrected variable name to 'link'

                data.append({
                    "link": link  # Corrected the key to 'link'
                })

            if page_num == page_limit or not soup.select_one(".d6cvqb a[id=pnnext]"):
                break
            params["start"] += 10
        except requests.RequestException as e:
            print(f"Request Exception: {e}")
            break
    k=[]
    for i in data:
        k.append((i['link']))
    return(k)



# Example usage:
