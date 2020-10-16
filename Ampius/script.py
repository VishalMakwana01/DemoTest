import sys
import pgeocode
nomi = pgeocode.Nominatim('IN')
print(nomi.query_postal_code(sys.argv[1]).county_name)
