
# MAUD-Visualizer

<h3 align="center">A visualization pipeline specifically made for visualizing ground truth and predictions on the Merger & Acquisition Understanding Dataset (MAUD) [1] </h3>

Follow steps for USAGE! 
After step 1, perform either step 2 or step 3 (not both).

- **1. Generating MAUD .csv file**
  - i. Clone this repository.
  - ii. Download requirements: pip install fuzzywuzzy.
  - iii. Run highlighted_path_finder.py using the command "python highlighted_path_finder.py --contract_idx CONTRACT_NUMBER_BETWEEN_0_AND_135"
  - iv. This will generate a contract in the "generated_csv" folder. A few of them are already present in the folder.
  - v. Download this generated csv and use it along with the HTML file for the conntract for visualization
  
- **2. RUN ON PUBLIC WEBSITE** - [https://okayteakay.github.io/MAUD-Visualizer/](https://okayteakay.github.io/MAUD-Visualizer/)

- **3. RUN LOCALLY**
  - i. Download and install XAMPP (Recommended)
  - ii. Put the project folder “MAUD-Visualizer under “xampp/htdocs/”
  - iii. Open XAMPP Control Panel Start Apache service
  - iv. Access [http://localhost/MAUD-Visualizer/](http://localhost/MAUD-Visualizer/) in Google Chrome to open the website.

For queries, reach out at **tayyibah@nyu.edu**

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

References:
[1] Wang, S.H., Scardigli, A., Tang, L., Chen, W., Levkin, D., Chen, A., Ball, S., Woodside, T., Zhang, O. and Hendrycks, D., 2023. MAUD: An Expert-Annotated Legal NLP Dataset for Merger Agreement Understanding. arXiv preprint arXiv:2301.00876.

