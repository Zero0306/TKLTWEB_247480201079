@echo off
set FILTER_BRANCH_SQUELCH_WARNING=1
git filter-branch -f --env-filter "if test \"$GIT_AUTHOR_EMAIL\" = \"daknesshunter@gmail.com\"; then export GIT_AUTHOR_NAME=\"Zero\"; export GIT_AUTHOR_EMAIL=\"tvd19032006@gmail.com\"; fi; if test \"$GIT_COMMITTER_EMAIL\" = \"daknesshunter@gmail.com\"; then export GIT_COMMITTER_NAME=\"Zero\"; export GIT_COMMITTER_EMAIL=\"tvd19032006@gmail.com\"; fi" --tag-name-filter cat -- --branches --tags
