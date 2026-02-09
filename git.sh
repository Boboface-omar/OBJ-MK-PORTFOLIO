#!/bin/bash

git add .

echo "📝 Message du commit :"
read MESSAGE

if git diff --cached --quiet; then
  echo "❌ Aucun changement à commit"
  exit 0
fi

git commit -m "$MESSAGE"
git push origin master

echo "🚀 Code envoyé sur GitHub"
