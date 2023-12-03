
# MAUD-Visualizer

<h3 align="center">A visualization pipeline specifically made for visualizing ground truth and predictions on the Merger & Acquisition Understanding Dataset</h3>

- RUN ON PUBLIC WEBSITE - [https://okayteakay.github.io/MAUD-Visualizer/](https://okayteakay.github.io/MAUD-Visualizer/)

- OR RUN LOCALLY
- **1. Download and install XAMPP (Recommended)**
- **2. Put the project folder “MAUD-Visualizer under “xampp/htdocs/”**
- **3. Open XAMPP Control Panel Start Apache service**
- **4. Access [http://localhost/MAUD-Visualizer/](http://localhost/MAUD-Visualizer/) in Google Chrome to open the website.**

- USAGE
- **For now, use a contract .csv file from MarkupMnA, pass it through highlighted_path_finder.py, then input the .csv file.**

- For queries, reach out at **tayyibah@nyu.edu**

<h3 align="left">Connect with me:</h3>
<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>




## Run on pulic website
Use url: https://okayteakay.github.io/MAUD-Visualizer/

## Run locally
1. Download and install XAMPP (Recommended)
2. Put the project folder “MAUD-Visualizer under “xampp/htdocs/”
3. Open XAMPP Control Panel 
4. Start Apache service
5. Access http://localhost/MAUD-Visualizer/ in Google Chrome to open the website.

## Usage
For now, use a contract csv file from MarkupMnA, pass it through highlighted_path_finder.py in multi-modal-mna, then input the .csv file.
9
- Clone the repository
- Download requirements: pip install fuzzywuzzy
- Run highlighted_path_finder.py using the command "python highlighted_path_finder.py --contract_idx CONTRACT_NUMBER_BETWEEN_0_AND_131"
- This will generate a contract in the generated_csv folder. A few of them are already in the folder
- Download this generated csv and use it along with the HTML file for the conntract for visualization