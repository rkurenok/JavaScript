Feature: Sending Mail

    Scenario: Log in
        Given loaded "https://passport.yandex.by/auth/add" page
        # When login is entered into input with type "text"
        And  password is entered into input with name "passwd"
        Then the span with class name "user-account" is visible
    
    Scenario: Send mail
        Given loaded "https://mail.yandex.by/" page
        When click on a link with class "mail-ComposeButton-Wrap js-compose-button-container"
        And write a message and click on a button with class "_nb-action-button"
        Then check that div has text about done send message

    Scenario: Send mail with data table
        Given loaded "https://mail.yandex.by/" page
        When click on a link with class "mail-ComposeButton-Wrap js-compose-button-container"
        And write a message
        |krtest01@yandex.by|
        |test1|
        |Test|
        Then check that div has text about done send message
    
    Scenario: Log out
        Given loaded "https://mail.yandex.by/" page
        When clicking on a head div with class "ns-view-head-user" and clicking on a head link with class "b-user-dropdown-content b-user-dropdown-content-with-exit"
        Then check that the link entered mail is visible