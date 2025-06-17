// Function to execute once scripts are loaded
function onScriptsLoaded(callback) {
    // Ensure the DOM is fully loaded before executing the callback
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener('load', callback);
    }
  }
  
  // Function to build the vector scene
  function BuildVectorScene(container, data) {
    // Assuming this function will use the container and data parameters to build a scene
    // Add your implementation here
    console.log("Building vector scene in:", container);
    console.log("Data:", data);
  }
  
  // Example usage
  onScriptsLoaded(function () {
    BuildVectorScene($('#48nwA').parent(), {
      "cloud-1.svg": {
        "left": -0.017583982662170886,
        "top": -0.3130678615566581,
        "height": 0.05074875207986722,
        "order": 1,
        "alt": "Cloud",
        "base64": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjcuMjkgNTQuODQiPjxkZWZzPjxzdHlsZT4uYzF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiI+PGcgaWQ9IkxheWVyXzEtMiI+PHJlY3QgY2xhc3M9ImMxIiB5PSIzNC4wMiIgd2lkdGg9IjEyNy4yOSIgaGVpZ2h0PSIyMC44MSIgcng9IjEwLjQxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjcuMjkgODguODYpIHJvdGF0ZSgtMTgwKSIvPjxwYXRoIGNsYXNzPSJjMSIgZD0iTTM3LjYxLDUzLjY0Yy0yLjQyLS4zOC00LjgyLS44MS03LjIzLTEuMjdBMzEuODIsMzEuODIsMCwxLDEsODEuMjEsNDkuMywxMjAuMDYsMTIwLjA2LDAsMCwwLDM3LjYxLDUzLjY0WiIvPjxjaXJjbGUgY2xhc3M9ImMxIiBjeD0iOTIuMjciIGN5PSIzNS40MyIgcj0iMTUuNDEiLz48L2c+PC9nPjwvc3ZnPg=="
      },
      "cloud-2.svg": {
        "left": -0.5713945506033886,
        "top": -0.04220134707676104,
        "height": 0.11730449251247953,
        "order": 1,
        "alt": "Cloud",
        "base64": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzguODYgNTkuODIiPjxkZWZzPjxzdHlsZT4uYzF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiI+PGcgaWQ9IkxheWVyXzEtMiI+PHJlY3QgY2xhc3M9ImMxIiB5PSIzNy4xMiIgd2lkdGg9IjEzOC44NiIgaGVpZ2h0PSIyMi43MSIgcng9IjExLjM1Ii8+PHBhdGggY2xhc3M9ImMxIiBkPSJNOTcuODMsNTguNTFxNC0uNjEsNy44OS0xLjM4YTM0LjcxLDM0LjcxLDAsMSwwLTU1LjQ1LTMuMzRDNjYuMjIsNTIuNTgsODIuNjcsNTMuOTIsOTcuODMsNTguNTFaIi8+PGNpcmNsZSBjbGFzcz0iYzEiIGN4PSIzOC4yMSIgY3k9IjM4LjY1IiByPSIxNi44MSIvPjwvZz48L2c+PC9zdmc+"
      },
      "cloud-3.svg": {
        "left": -0.37453135558102957,
        "top": 0.4820273395142826,
        "height": 0.18386023294509168,
        "order": 1,
        "alt": "Cloud",
        "base64": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzguODYgNTkuODIiPjxkZWZzPjxzdHlsZT4uYzF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfMiI+PGcgaWQ9IkxheWVyXzEtMiI+PHJlY3QgY2xhc3M9ImMxIiB5PSIzNy4xMiIgd2lkdGg9IjEzOC44NiIgaGVpZ2h0PSIyMi43MSIgcng9IjExLjM1Ii8+PHBhdGggY2xhc3M9ImMxIiBkPSJNOTcuODMsNTguNTFxNC0uNjEsNy44OS0xLjM4YTM0LjcxLDM0LjcxLDAsMSwwLTU1LjQ1LTMuMzRDNjYuMjIsNTIuNTgsODIuNjcsNTMuOTIsOTcuODMsNTguNTFaIi8+PGNpcmNsZSBjbGFzcz0iYzEiIGN4PSIzOC4yMSIgY3k9IjM4LjY1IiByPSIxNi44MSIvPjwvZz48L2c+PC9zdmc+"
      },
      "rocket.svg": {
        "left": 0.5503006385922561,
        "top": 0.2953601587376671,
        "height": 1.5149750415973369,
        "order": 1,
        "alt": "Rocket ship",
        "base64": "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NDkuMzQgNzExLjk5Ij48ZGVmcz48c3R5bGU+LmMxe2ZpbGw6IzA4Mzc0Yzt9LmMye2ZpbGw6I2U5ZTllOTt9LmMze2ZpbGw6I2VkOTQyMTt9LmM0e2ZpbGw6I2ZiYjc1Yzt9LmM1e2ZpbGw6IzAzMmMzZjt9LmM2e2ZpbGw6IzM2YjliOTt9LmM3e2ZpbGw6IzJlNjk2Yzt9LmM4e29wYWNpdHk6MC4wNTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiPjxnIGlkPSJMYXllcl8xLTIiPjxjaXJjbGUgY2xhc3M9ImMxIiBjeD0iMTQxLjk2IiBjeT0iNTE3LjY3IiByPSIxMzIuODMiLz48Y2lyY2xlIGNsYXNzPSJjMSIgY3g9IjM3MC4yMyIgY3k9IjQ2OC44NSIgcj0iMTA5LjM3Ii8+PGNpcmNsZSBjbGFzcz0iYzIiIGN4PSI0MDkuMzQiIGN5PSI1NTUuODUiIHI9IjE0MCIvPjxjaXJjbGUgY2xhc3M9ImMyIiBjeD0iOTcuMzQiIGN5PSI1MTAuNzkiIHI9Ijk3LjM0Ii8+PHBhdGggY2xhc3M9ImMyIiBkPSJNMjQ5LDI0NC41NEgyNzRzLjg1LDcxLjI4LDIyLjUxLDEzNDcuNSw4Mi43MSwzNzk4LjUsMTI0LDI0NC41NFoiLz48PHBhdGggY2xhc3M9ImMyIiBkPSJNMjcxLjE5LDI0NC41NEgyNDYuMjRzLS44NCw3MS4yOC0yMi41MSwxMzQuNVMxNDEsNDk4LjU0LDE0MSw0OTguNTRIMjY5Ljg4UzI3MC4zOSwyNDQuNTQsMjcxLjE5LDI0NC41NFoiLz48Y2lyY2xlIGNsYXNzPSJjMiIgY3g9IjI1Ni4yMSIgY3k9IjU3MS45OSIgcj0iMTQwIi8+PHBhdGggY2xhc3M9ImMzIiBkPSJNMjQ1LjEzLDI1My4xNHMtMTQuNDMsMzgtMTIsNjcuMzFjMi4xMywyNS41MywxNiw0NS42NywyMi45Miw1NC4yNWE1LjM0LDUuMzQsMCwwLDAsOC4xNS4yMSw5MS4yNSw5MS4yNSwwLDAsMCwyMy4xNC01OS4zMWMuNTctNDAuNTEtMTItNjIuNDYtMTItNjIuNDZaIi8+PHBhdGggY2xhc3M9ImM0IiBkPSJNMjUxLjQxLDI1My41NHMtOC4zOSwyNC03LDQzLjA2QzI0Ni4xLDMxOC45NCwyNjAsMzM0LjUyLDI2MCwzMzQuNTJTMjc1LjYyLDMyMC4xLDI3NiwyOTMuNjZzLTctNDAuMTItNy00MC4xMloiLz48Y2lyY2xlIGNsYXNzPSJjNyIgY3g9IjI2MC45OSIgY3k9Ijk0LjczIiByPSIyMC4yIi8+PHBhdGggY2xhc3M9ImM4IiBkPSJNMjY0LjI1LDIuMjNBNC44Miw0LjgyLDAsMCwwLDI2MS40LjE2YzE0LjUxLDMxLjIyLDMzLjczLDgzLjM5LDMyLDEzNy0xLjU5LDUwLjMxLTE2LjA4LDkyLjQyLTIwLjM2LDEwMy40MmgxOGEzLjY5LDMuNjksMCwwLDAsMy4yOS0yLjQ5YzMuNTQtOS41MiwxNi42Mi00Ny44OSwxNi42Mi05My44M0MzMTEsODEsMjc2LjMsMjEuMTEsMjY0LjI1LDIuMjNaIi8+PHBhdGggY2xhc3M9ImM3IiBkPSJNMjYwLjc1LDI1My42MmM3LjkyLDAsMTMuODEtMzEuMTQsMTMuODEtNjQuNDYsMC0yMy4xNC0uNTEtNDEuODFDMjQ2Ljk0LDIyMi41LDI1Mi44MywyNTMuNjIsMjYwLjc1LDI1My42MloiLz48L2c+PC9nPjwvc3ZnPg=="
      },
      "id": "0NM6BB88K6O6O0H5E5J6E1ABAGuDC4009Ms0U700pH0076FU75N9002K7083KU770UF7072Bi3s8BuEA89040Ji77G6Js3s87B1"
    });
  });
  