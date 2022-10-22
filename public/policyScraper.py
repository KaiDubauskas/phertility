from bs4 import BeautifulSoup as bs
import requests
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
import pandas as pd
import os
import csv
import selenium
import json
import sys

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

base_url = "https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html"
driver.get(base_url)
sleep(5)


policies = {}
for i in range(1, 52):
    policies[driver.find_element_by_xpath("//*[@id=\"g-search-table\"]/tbody/tr[" + str(i) + "]/td[1]/div[1]").text] = (
        driver.find_element_by_xpath("//*[@id=\"g-search-table\"]/tbody/tr[" + str(i) + "]/td[4]/div").text)

sys.stdout = open("public/policies.js", 'w')

jsonPolicy = json.dumps(policies)
print("const jsonPolicy = {}".format(jsonPolicy))
