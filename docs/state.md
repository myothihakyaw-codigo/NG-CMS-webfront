# 📦 State Management

We used [recoil](https://recoiljs.org/) for state management. All things related to global state(atoms, selectors) must be exist only within [/states](https://github.com/sgcodigo/nextjs_boilerplate_2022/tree/main/states) folder.
<br/>

_When the global state's codebase grows, don't recommend to divide `atoms` & `selectors` into different files. Bec `selectors` are usually derived state of `atoms` which makes them coupled code. Instead try to moved coupled `atoms` & `selectors` into a different file._
<br/>
