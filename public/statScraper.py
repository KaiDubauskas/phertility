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

base_url = "https://abort73.com/abortion_facts/states/"
driver.get(base_url)
sleep(5)


abortionRates = []
totalAbortions = []
percentAborted = []
facilityNumber = []

for i in range(2, 53):
    abortionRates.append(driver.find_element_by_xpath(
        "//*[@id=\"cdc_body\"]/table/tbody/tr[" + str(i) + "]/td[2]").text)
    totalAbortions.append(driver.find_element_by_xpath(
        "//*[@id=\"cdc_body\"]/table/tbody/tr[" + str(i) + "]/td[3]").text)
    percentAborted.append(driver.find_element_by_xpath(
        "//*[@id=\"cdc_body\"]/table/tbody/tr[" + str(i) + "]/td[4]").text)
    facilityNumber.append(driver.find_element_by_xpath(
        "//*[@id=\"cdc_body\"]/table/tbody/tr[" + str(i) + "]/td[5]").text)


sys.stdout = open("public/stats.js", 'w')

abortionRatesJSON = json.dumps(abortionRates)
totalAbortionsJSON = json.dumps(totalAbortions)
percentAbortedJSON = json.dumps(percentAborted)
facilityNumberJSON = json.dumps(facilityNumber)

print("const abortionRates = {}".format(abortionRatesJSON))
print("const totalAbortions = {}".format(totalAbortionsJSON))
print("const percentAborted = {}".format(percentAbortedJSON))
print("const facilityNumber = {}".format(facilityNumberJSON))
