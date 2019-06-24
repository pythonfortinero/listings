TASK 2
======

for read the listings.db I used

```
python manage.py inspectdb > models.py
```

for testing purpose, I made the migration and made a new folder test migrations
with managed = False commented

And I made

```
python manage.py dumpdata listings.Listings > listings.json
```

after this I use this fixtures in the testcase.

For run the project you need docker and docker compose
first build with 

```
docker-compose build
```

and then run with

```
docker-compose up
```

The front run in localhost:3000 and the back run in localhost:8000.

the back use django and django-rest-framework and the front use react-redux.

Make this project has taken to me 4.5 hours work man.