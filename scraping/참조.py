import csv
import re
import time

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

filename = "starbucks_product.csv"
csv_open = open(filename, "w+", encoding="utf-8")
csv_writer = csv.writer(csv_open)

driver = webdriver.Chrome(ChromeDriverManager().install())
url = "https://www.starbucks.co.kr/menu/drink_list.do"
driver.get(url)
time.sleep(7)


html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
drinks = soup.findAll("li", {"class": re.compile("menuDataSet")})

for drink in drinks:
    image_tag = drink.find("img")
    image_url = image_tag['src']
    title = image_tag['alt']
    csv_writer.writerow((title, image_url))

# csv_open.close()