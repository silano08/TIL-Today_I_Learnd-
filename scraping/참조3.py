import csv
import re
import time

import requests
from bs4 import BeautifulSoup
# from pymongo import MongoClient
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager

url = "https://www.starbucks.co.kr/menu/drink_view.do?product_cd=106509"

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
drinks = soup.findAll("div", {"class": re.compile("content02")})

# print(drinks)

name = drinks.find("h4").text()
# eng_name =
# description = 
# price = 
# menu = "음료"
# category = 
# eng_category = "추후직접수정해야함"
# nutrition =
# allergy =
# image = 
# hot = True
# ice = False

print(name)