Feature: Authorization with valid/invalid login and password

    # Background:
    #     Given loaded login page

    Scenario: Entered valid login and password
        Given loaded "https://passport.yandex.by/auth/add" page
        # When login is entered into input with type "text"
        And  password is entered into input with name "passwd"
        Then the span with class name "user-account" is visible
    
    Scenario: Log out
        Given loaded "https://mail.yandex.by/" page
        When clicking on a head div with class "ns-view-head-user" and clicking on a head link with class "b-user-dropdown-content b-user-dropdown-content-with-exit"
        Then check that the link entered mail is visible
    
    Scenario: Entered invalid login and password
        Given loaded "https://passport.yandex.by/auth/add" page
        #When login is entered into input with type "text"
        And  login is entered into input with name "passwd"
        Then check that the error field is visible