echo "Deleting main.css"
cd "`dirname "$0"`"
rm ../../mobile/css/main.css
rm ../../mobile/css/main.min.css
rm ../../mobile/mobilemain.js

echo "Creating file list of all sub css files"

find ../../mobile/compiled/css -name '*.css' > cssfilelist.txt
cat cssfilelist.txt

echo "Concat all of files into new main.css"
while read line
do
cat $line >> ../../mobile/css/main.css
done < cssfilelist.txt