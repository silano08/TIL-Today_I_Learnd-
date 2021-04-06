from pymongo import MongoClient

# 카테고리 DB작업


name = ["New","추천","콜드 브루","에스프레소","프라푸치노","블렌디드","스타벅스 피지오","티바나","기타"]
eng_category = [" ","Recommend","Cold Brew" ,"Espresso","Frappuccino","Blended","Starvbucks Fizzio","Teavana","Others"]
image_url = ["2021 CherryBlossom","추천","콜드 브루","에스프레소","프라푸치노","블렌디드","스타벅스 피지오","티","기타 제조 음료"]

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.starbucks    # 'menu'라는 이름의 db를 사용합니다. 'dbsparta' db가 없다면 새로 만듭니다.


for i in range(0,9):
    tt = image_url[i]
    rr = db.menus.find_one({'category':tt})
    img = rr["image"]
    doc = {"name":name[i],"eng_name":eng_category[i],"image":img}
    db.categories.insert_one(doc)