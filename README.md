TASK 2
======

for read the db im use

python manage.py inspectdb > models.py


for testing make the migration and make a new folder test_migrations
with managed = False commented

and make python manage.py dumpdata listings.Listings > listings.json

and use this fixtures in the testcase