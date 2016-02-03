echo "Deleting main.css"
cd "`dirname "$0"`"
rm ../WebReady/main.css
rm ../WebReady/main.min.css
rm ../WebReady/mobilemain.js

echo "Creating file list of all sub css files"

find .. -name '*.css' > cssfilelist.txt
cat cssfilelist.txt

echo "Concat all of files into new main.css"
while read line
do
cat $line >> ../WebReady/main.css
done < cssfilelist.txt