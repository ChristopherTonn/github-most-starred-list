# First and Last Test Log

Part of this task is to provide the first and last test execution logs to demonstrate the testing setup and validation process.

## First Test Execution

```bash
github-most-starred-list % npm test

> github-most-starred-list@0.0.0 test
> ng test && npx cypress run

✔ Browser application bundle generation complete.
07 08 2025 17:53:28.975:WARN [karma]: No captured browser, open http://localhost:9876/
07 08 2025 17:53:28.986:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
07 08 2025 17:53:28.986:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
07 08 2025 17:53:28.989:INFO [launcher]: Starting browser Chrome
07 08 2025 17:53:29.700:INFO [Chrome 138.0.0.0 (Mac OS 10.15.7)]: Connected on socket He_0zraOhUgXAyhCAAAB with id 15658052
Chrome 138.0.0.0 (Mac OS 10.15.7): Executed 3 of 3 SUCCESS (0.251 secs / 0.042 secs)
TOTAL: 3 SUCCESS
```

### Test Summary

- ✅ **Unit Tests**: 3 of 3 tests passed successfully
- ⏱️ **Execution Time**: 0.251 seconds total (0.042 seconds test execution)
- 🌐 **Browser**: Chrome 138.0.0.0 on Mac OS 10.15.7
- 📊 **Success Rate**: 100%

---

## Last Test Execution

```bash
christophertonn@MacBook-Pro-von-Christopher github-most-starred-list % npm test

> github-most-starred-list@0.0.0 test
> ng test --watch=false && npx cypress run

⠦ Generating browser application bundles (phase: building).../*! 🌼 daisyUI 5.0.50 */
✔ Browser application bundle generation complete.
12 08 2025 12:05:54.363:INFO [karma-server]: Karma v6.4.4 server started at http://localhost:9876/
12 08 2025 12:05:54.364:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
12 08 2025 12:05:54.367:INFO [launcher]: Starting browser Chrome
12 08 2025 12:05:55.507:INFO [Chrome 139.0.0.0 (Mac OS 10.15.7)]: Connected on socket 66o6eSZbnX3ME2AzAAAB with id 55687531
LOG: 'Date from now 30 days ago:', '2025-07-13'
Chrome 139.0.0.0 (Mac OS 10.15.7): Executed 7 of 15 SUCCESS (0 secs / 0.051 secs)
LOG: 'Date from now 30 days ago:', '2025-07-13'
Chrome 139.0.0.0 (Mac OS 10.15.7): Executed 8 of 15 SUCCESS (0 secs / 0.055 secs)
LOG: 'Date from now 30 days ago:', '2025-07-13'
Chrome 139.0.0.0 (Mac OS 10.15.7): Executed 9 of 15 SUCCESS (0 secs / 0.056 secs)
Chrome 139.0.0.0 (Mac OS 10.15.7): Executed 15 of 15 SUCCESS (0.064 secs / 0.059 secs)
TOTAL: 15 SUCCESS

DevTools listening on ws://127.0.0.1:60997/devtools/browser/1978964f-5e98-47d3-ac01-8aceda46637b
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped

===================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        14.5.4                                                                         │
  │ Browser:        Electron 130 (headless)                                                        │
  │ Node Version:   v20.19.0 (/Users/christophertonn/.nvm/versions/node/v20.19.0/bin/node)         │
  │                 9m                                                                             │
  │ Specs:          2 found (repo-list-item.cy.ts, repo-list.cy.ts)                                │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  repo-list-item.cy.ts                                                            (1 of 2)


  Repo List Item
    ✓ should display repo list items (1526ms)
    ✓ should show profile picture (151ms)
    ✓ should display title (146ms)
    ✓ should display description (142ms)
    ✓ should show stars count (137ms)


  5 passing (2s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     repo-list-item.cy.ts                                                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  repo-list.cy.ts                                                                 (2 of 2)


  Repo List
    ✓ should display the repo list page (154ms)
    ✓ should show at least one list item (65ms)
    Infinite Scroll
      ✓ should load more repositories when scrolling down (2633ms)


  3 passing (3s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     2 seconds                                                                        │
  │ Spec Ran:     repo-list.cy.ts                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  repo-list-item.cy.ts                     00:02        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  repo-list.cy.ts                          00:02        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:05        8        8        -        -        -
```

### Test Summary

- ✅ **Unit Tests**: 15 of 15 tests passed successfully
- ✅ **E2E Tests**: 8 of 8 tests passed successfully
- ⏱️ **Execution Time**: Unit: 0.057 secs, E2E: 2 secs
- 🌐 **Browser**: Chrome 139.0.0.0 on Mac OS 10.15.7, Cypress: Electron 130
- 📊 **Success Rate**: 100%
- 🚀 **Features Tested**: Repository listing, item display, infinite scroll functionality
