# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. I have a React Project name Donation Compaign.
1. I have 12 donation card with 4 categories [Food, Health, Education, Cloths]. which are get by api call.
2. From this card which are selected, then calculate total donation percentage of 12 cards. suppose i select four donation card. then my donation percentage is 33.3%. remaining percentage is 66.7%.
3. Now how can i create a Pie chart for this percentage using react. where selected percentage is red, and remaining percentage is green.