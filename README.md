# frameworks test

idek how to benchmark stuff

also testing how different frameworks granularly rerender based on state changes

## using
TS and routing lib (with basic ssr)
- SolidJS + SolidStart
- Qwik + Qwik City
- React + NextJS (v13, with `appDir` feature on)

## doing
multiple pages with SSR
- basic index page with no interactivity
- counter page
    - countValue passed down to child
        - consoleLog + countValue (in same element)
        - consoleLog + countValue (in same string)
- todo list
    - adding item uses handler passed down by props
    - modifying item uses handler passed down by props
    - deleting items modifies state directly (passed down by props)


## remarks

jazz

