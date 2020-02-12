Feature: Create and delete folder

    Scenario: Log in
        Given loaded "https://passport.yandex.by/auth/add" page
        When login is entered into input with type "text"
        And  password is entered into input with name "passwd"
        Then the span with class name "user-account" is visible
    
    Scenario: Create folder
        Given loaded "https://mail.yandex.by/" page
        When click on a span with class "mail-FolderList-Setup_link" and write folder name and click on a create folder button
        Then check that link has text equal folder name

    Scenario: Delete folder
        Given loaded "https://mail.yandex.by/" page
        When click on a setting mail link
        And click on a setting folder span and click on a delete folder button
        Then check that folder is delete
    
    Scenario: Log out
        Given loaded "https://mail.yandex.by/" page
        When clicking on a head div with class "ns-view-head-user" and clicking on a head link with class "b-user-dropdown-content b-user-dropdown-content-with-exit"
        Then check that the link entered mail is visible