const quizData = [
  // -------- MS WORD --------
  {
    question: "Which shortcut key is used to copy text in MS Word?",
    options: ["Ctrl + X", "Ctrl + V", "Ctrl + C", "Ctrl + P"],
    answer: "Ctrl + C"
  },
  {
    question: "Which menu allows you to change page margins in Word?",
    options: ["Insert", "Page Layout", "Home", "Review"],
    answer: "Page Layout"
  },
  {
    question: "What is the default file extension for Word documents?",
    options: [".doc", ".word", ".txt", ".docx"],
    answer: ".docx"
  },
  {
    question: "How can you insert a page break?",
    options: ["Ctrl + B", "Ctrl + Enter", "Shift + Enter", "Alt + Enter"],
    answer: "Ctrl + Enter"
  },
  {
    question: "Which feature checks spelling as you type?",
    options: ["Spell Check", "AutoText", "Grammar Check", "AutoCorrect"],
    answer: "Spell Check"
  },
  {
    question: "Which tab allows you to insert a table?",
    options: ["Insert", "View", "Layout", "Design"],
    answer: "Insert"
  },
  {
    question: "To select an entire paragraph, how many times do you click?",
    options: ["Twice", "Three times", "Four times", "Once"],
    answer: "Three times"
  },
  {
    question: "Which feature helps in finding synonyms?",
    options: ["Spelling & Grammar", "Research", "Thesaurus", "Dictionary"],
    answer: "Thesaurus"
  },
  {
    question: "Which file format is best to share Word files securely?",
    options: [".doc", ".docx", ".pdf", ".html"],
    answer: ".pdf"
  },
  {
    question: "How to add a watermark in Word?",
    options: ["Insert > Header", "Design > Watermark", "Layout > Watermark", "File > Options"],
    answer: "Design > Watermark"
  },

  // -------- EXCEL --------
  {
    question: "Which function is used to calculate the average in Excel?",
    options: ["=SUM()", "=COUNT()", "=AVERAGE()", "=MAX()"],
    answer: "=AVERAGE()"
  },
  {
    question: "What is the formula to add A1 and B1?",
    options: ["=A1+B1", "=SUM(A1+B1)", "=ADD(A1,B1)", "=PLUS(A1,B1)"],
    answer: "=A1+B1"
  },
  {
    question: "What symbol is used to start a formula?",
    options: ["@", "=", "+", "#"],
    answer: "="
  },
  {
    question: "Which chart is best for showing trends over time?",
    options: ["Bar Chart", "Pie Chart", "Line Chart", "Column Chart"],
    answer: "Line Chart"
  },
  {
    question: "Which function returns the highest value?",
    options: ["=MIN()", "=MAX()", "=LARGE()", "=HIGH()"],
    answer: "=MAX()"
  },
  {
    question: "How do you freeze the top row?",
    options: ["View > Freeze Panes > Freeze Top Row", "Layout > Freeze", "Insert > Freeze", "Data > Freeze Panes"],
    answer: "View > Freeze Panes > Freeze Top Row"
  },
  {
    question: "What does VLOOKUP do?",
    options: ["Sorts data", "Finds data in a vertical column", "Saves file", "Checks for duplicates"],
    answer: "Finds data in a vertical column"
  },
  {
    question: "Which function rounds numbers?",
    options: ["=ROUND()", "=CUT()", "=TRIM()", "=SHORT()"],
    answer: "=ROUND()"
  },
  {
    question: "What is the shortcut for inserting a new worksheet?",
    options: ["Shift + F11", "Ctrl + N", "Ctrl + T", "Alt + Enter"],
    answer: "Shift + F11"
  },
  {
    question: "Which error represents 'division by zero'?",
    options: ["#VALUE!", "#NAME?", "#DIV/0!", "#ERROR!"],
    answer: "#DIV/0!"
  },

  // -------- POWERPOINT --------
  {
    question: "Which shortcut starts a slideshow from the beginning?",
    options: ["F5", "F2", "Shift + F5", "Ctrl + S"],
    answer: "F5"
  },
  {
    question: "Which tab allows you to insert a chart?",
    options: ["Insert", "View", "Design", "Layout"],
    answer: "Insert"
  },
  {
    question: "What is a transition?",
    options: ["Slide animation", "Movement between slides", "Text format", "Background color"],
    answer: "Movement between slides"
  },
  {
    question: "Which view is used to reorder slides?",
    options: ["Normal View", "Slide Sorter View", "Reading View", "Slide Show View"],
    answer: "Slide Sorter View"
  },
  {
    question: "Which file format is used to save a PowerPoint template?",
    options: [".pptx", ".potx", ".ppt", ".ppsx"],
    answer: ".potx"
  },

  // -------- ACCESS --------
  {
    question: "What is a primary key?",
    options: ["A duplicate field", "A field with date", "A unique identifier", "A field with password"],
    answer: "A unique identifier"
  },
  {
    question: "What is used to retrieve data in Access?",
    options: ["Forms", "Tables", "Queries", "Reports"],
    answer: "Queries"
  },
  {
    question: "Which object stores data in rows and columns?",
    options: ["Form", "Query", "Report", "Table"],
    answer: "Table"
  },
  {
    question: "What is a relationship in Access?",
    options: ["A query link", "A table backup", "A connection between tables", "An Access shortcut"],
    answer: "A connection between tables"
  },
  {
    question: "Which view allows you to design a form manually?",
    options: ["Design View", "Layout View", "Form View", "Sheet View"],
    answer: "Design View"
  },

  // -------- INTERNET --------
  {
    question: "What does 'URL' stand for?",
    options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Retrieval Link", "User Resource Link"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which protocol is used for secure communication?",
    options: ["HTTP", "FTP", "SMTP", "HTTPS"],
    answer: "HTTPS"
  },
  {
    question: "Which browser was developed by Microsoft?",
    options: ["Chrome", "Safari", "Edge", "Opera"],
    answer: "Edge"
  },
  {
    question: "What is the function of a web browser?",
    options: ["Send email", "Create websites", "View websites", "Build databases"],
    answer: "View websites"
  },
  {
    question: "What is a search engine?",
    options: ["A browser", "A social media", "A tool to find websites", "A virus scanner"],
    answer: "A tool to find websites"
  },

  // -------- PAGEMAKER --------
  {
    question: "Which key opens the toolbox in PageMaker?",
    options: ["F1", "F2", "F3", "F4"],
    answer: "F4"
  },
  {
    question: "PageMaker is mainly used for:",
    options: ["Programming", "Database", "Desktop publishing", "Video editing"],
    answer: "Desktop publishing"
  },
  {
    question: "Which tool is used to add text in PageMaker?",
    options: ["Pointer Tool", "Text Tool", "Rectangle Tool", "Line Tool"],
    answer: "Text Tool"
  },
  {
    question: "Which extension is used to save PageMaker files?",
    options: [".pmd", ".pgm", ".pm", ".pagemaker"],
    answer: ".pmd"
  },
  {
    question: "What is the default unit of measurement in PageMaker?",
    options: ["Pixels", "Inches", "Points", "Centimeters"],
    answer: "Points"
  },

  // -------- PHOTOSHOP --------
  {
    question: "Which tool is used to remove red-eye in Photoshop?",
    options: ["Clone Stamp", "Healing Brush", "Red Eye Tool", "Smudge Tool"],
    answer: "Red Eye Tool"
  },
  {
    question: "What is the shortcut for 'Free Transform'?",
    options: ["Ctrl + T", "Ctrl + F", "Ctrl + M", "Ctrl + E"],
    answer: "Ctrl + T"
  },
  {
    question: "Which panel shows the layer structure?",
    options: ["Tools", "History", "Layers", "Swatches"],
    answer: "Layers"
  },
  {
    question: "Which format supports transparency?",
    options: [".jpg", ".gif", ".png", ".bmp"],
    answer: ".png"
  },
  {
    question: "What does RGB stand for?",
    options: ["Red Green Black", "Red Green Blue", "Raw Graphic Base", "Real Gradient Bitmap"],
    answer: "Red Green Blue"
  },

  // -------- TALLY PRIME --------
  {
    question: "Which shortcut opens the 'Company Info' screen in Tally?",
    options: ["Alt + F1", "Alt + F3", "F12", "Ctrl + Alt + C"],
    answer: "Alt + F3"
  },
  {
    question: "What is the default currency in Tally Prime?",
    options: ["INR", "USD", "EURO", "GBP"],
    answer: "INR"
  },
  {
    question: "Which voucher is used to record sales?",
    options: ["F4", "F5", "F8", "F9"],
    answer: "F8"
  },

  // -------- HTML --------
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<img>", "<a>", "<link>", "<href>"],
    answer: "<a>"
  },

  // -------- FUNDAMENTALS + SHORTCUTS --------
  {
    question: "Which shortcut key is used to refresh a webpage?",
    options: ["Ctrl + R", "F5", "Ctrl + F5", "Shift + R"],
    answer: "F5"
  },
// -------- MS WORD CONTINUED --------
{
  question: "Which shortcut key is used to make text bold in Word?",
  options: ["Ctrl + B", "Ctrl + M", "Ctrl + U", "Ctrl + I"],
  answer: "Ctrl + B"
},
{
  question: "How do you open the 'Find and Replace' dialog box?",
  options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"],
  answer: "Ctrl + H"
},
{
  question: "Which option is used to combine cells in a table?",
  options: ["Split", "Merge", "Insert", "Wrap"],
  answer: "Merge"
},
{
  question: "What does the Format Painter tool do?",
  options: ["Inserts text", "Copies formatting", "Changes layout", "Saves file"],
  answer: "Copies formatting"
},
{
  question: "How can you protect a Word document with a password?",
  options: ["File > Protect Document", "View > Lock", "Review > Password", "Insert > Security"],
  answer: "File > Protect Document"
},

// -------- EXCEL CONTINUED --------
{
  question: "Which function counts the number of numeric values?",
  options: ["=COUNT()", "=COUNTA()", "=SUM()", "=AVERAGE()"],
  answer: "=COUNT()"
},
{
  question: "What does the fill handle in Excel do?",
  options: ["Deletes data", "Copies formulas", "Saves workbook", "Opens format settings"],
  answer: "Copies formulas"
},
{
  question: "Which function is used to join text from multiple cells?",
  options: ["=JOIN()", "=CONCATENATE()", "=TEXTJOIN()", "=MERGE()"],
  answer: "=CONCATENATE()"
},
{
  question: "Which key combination inserts the current date?",
  options: ["Ctrl + D", "Ctrl + ;", "Shift + D", "Alt + T"],
  answer: "Ctrl + ;"
},
{
  question: "What is the maximum number of rows in Excel 2016?",
  options: ["1,048,576", "65,536", "1,000,000", "104,857"],
  answer: "1,048,576"
},

// -------- POWERPOINT CONTINUED --------
{
  question: "Which tab lets you add slide transitions?",
  options: ["Design", "Transitions", "Animations", "Insert"],
  answer: "Transitions"
},
{
  question: "Which shortcut is used to insert a new slide?",
  options: ["Ctrl + M", "Ctrl + N", "Alt + N", "Shift + N"],
  answer: "Ctrl + M"
},
{
  question: "Which view shows the presentation in full screen?",
  options: ["Normal View", "Reading View", "Slide Show", "Outline View"],
  answer: "Slide Show"
},
{
  question: "What is the use of 'Slide Master'?",
  options: ["Create transitions", "Edit theme and layout for all slides", "Insert animations", "Check grammar"],
  answer: "Edit theme and layout for all slides"
},
{
  question: "Which file extension is used for running slideshow directly?",
  options: [".pptx", ".ppsx", ".potx", ".ppt"],
  answer: ".ppsx"
},

// -------- TALLY PRIME --------
{
  question: "Which key is used to create a new company in Tally?",
  options: ["Alt + F3", "F12", "F11", "Ctrl + N"],
  answer: "Alt + F3"
},
{
  question: "Which voucher type is used for purchases?",
  options: ["F7", "F6", "F5", "F9"],
  answer: "F9"
},
{
  question: "What does 'Ledger' mean in Tally?",
  options: ["Group of items", "List of customers", "Individual account", "Company data"],
  answer: "Individual account"
},
{
  question: "How can you quit Tally application?",
  options: ["Ctrl + Q", "Alt + X", "Alt + F4", "Esc"],
  answer: "Alt + F4"
},
{
  question: "In Tally, Gateway of Tally is:",
  options: ["A menu screen", "A ledger", "A report", "A command"],
  answer: "A menu screen"
},

// -------- PAGEMAKER --------
{
  question: "Which menu is used to insert pages in PageMaker?",
  options: ["Edit", "Layout", "Insert", "Utilities"],
  answer: "Layout"
},
{
  question: "The default paper size in PageMaker is:",
  options: ["A4", "Letter", "Legal", "Custom"],
  answer: "Letter"
},
{
  question: "In PageMaker, which tool is used to draw boxes?",
  options: ["Rectangle Tool", "Box Tool", "Shape Tool", "Object Tool"],
  answer: "Rectangle Tool"
},
{
  question: "Which option adjusts text to fit into a frame?",
  options: ["Auto Flow", "Text Wrap", "Fit Text", "Auto Fit"],
  answer: "Auto Flow"
},
{
  question: "Which command is used to group objects?",
  options: ["Ctrl + G", "Ctrl + B", "Alt + G", "Ctrl + Shift + G"],
  answer: "Ctrl + G"
},

// -------- PHOTOSHOP --------
{
  question: "Which shortcut is used to deselect a selection?",
  options: ["Ctrl + D", "Ctrl + E", "Ctrl + Z", "Ctrl + Shift + D"],
  answer: "Ctrl + D"
},
{
  question: "The 'Magic Wand Tool' is used to:",
  options: ["Select areas by color", "Crop images", "Draw shapes", "Add text"],
  answer: "Select areas by color"
},
{
  question: "Which file format preserves layers?",
  options: [".jpg", ".png", ".psd", ".bmp"],
  answer: ".psd"
},
{
  question: "Which panel lets you change font style?",
  options: ["Layers", "Character", "History", "Navigator"],
  answer: "Character"
},
{
  question: "What does the Crop tool do?",
  options: ["Resizes file", "Removes unwanted area", "Adds background", "Creates layers"],
  answer: "Removes unwanted area"
},

// -------- ACCESS CONTINUED --------
{
  question: "What is a form in MS Access used for?",
  options: ["Entering data", "Deleting tables", "Editing queries", "Designing relationships"],
  answer: "Entering data"
},
{
  question: "Which database object is used to print data?",
  options: ["Form", "Query", "Table", "Report"],
  answer: "Report"
},
{
  question: "Which field type stores images?",
  options: ["OLE Object", "Memo", "Text", "Attachment"],
  answer: "OLE Object"
},
{
  question: "What is the use of a Query Wizard?",
  options: ["Import table", "Create query easily", "Sort form", "Export report"],
  answer: "Create query easily"
},
{
  question: "Which key is used to set a primary key in Design View?",
  options: ["Ctrl + K", "Alt + P", "Right-click > Primary Key", "Ctrl + P"],
  answer: "Right-click > Primary Key"
},

// -------- INTERNET CONTINUED --------
{
  question: "What is the function of 'Incognito Mode'?",
  options: ["Browse secretly without saving history", "Download faster", "Improve security", "Change theme"],
  answer: "Browse secretly without saving history"
},
{
  question: "Which company developed the Chrome browser?",
  options: ["Apple", "Google", "Microsoft", "Mozilla"],
  answer: "Google"
},
{
  question: "What is the full form of ISP?",
  options: ["Internet Software Provider", "Internet Service Provider", "Internal System Protocol", "Instant Search Program"],
  answer: "Internet Service Provider"
},
{
  question: "Which device connects a computer to the internet?",
  options: ["Printer", "Modem", "Router", "CPU"],
  answer: "Modem"
},
{
  question: "Which of the following is not a web browser?",
  options: ["Mozilla Firefox", "Google Chrome", "Microsoft Word", "Safari"],
  answer: "Microsoft Word"
},

// -------- HTML CONTINUED --------
{
  question: "Which tag is used to insert an image?",
  options: ["<img>", "<src>", "<image>", "<pic>"],
  answer: "<img>"
},
{
  question: "What does HTML stand for?",
  options: ["Hyperlinks Text Markup Language", "HyperText Markup Language", "HighText Machine Language", "HyperText Modern Language"],
  answer: "HyperText Markup Language"
},
{
  question: "Which tag creates a list with bullets?",
  options: ["<ol>", "<ul>", "<li>", "<list>"],
  answer: "<ul>"
},
{
  question: "Which attribute specifies the link in an anchor tag?",
  options: ["src", "link", "href", "url"],
  answer: "href"
},
{
  question: "What is the correct way to comment in HTML?",
  options: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
  answer: "<!-- comment -->"
},
// -------- MS WORD CONTINUED --------
{
  question: "What is the default font in Word 2016?",
  options: ["Times New Roman", "Arial", "Calibri", "Verdana"],
  answer: "Calibri"
},
{
  question: "Which feature in Word allows you to create a list with numbers?",
  options: ["Bullets", "Numbering", "Styles", "Formatting"],
  answer: "Numbering"
},
{
  question: "What is Mail Merge used for?",
  options: ["Sending emails", "Creating multiple letters with different names", "Encrypting documents", "Inserting symbols"],
  answer: "Creating multiple letters with different names"
},
{
  question: "Which option is used to track changes in Word?",
  options: ["Layout > Track", "Review > Track Changes", "Insert > Track", "File > History"],
  answer: "Review > Track Changes"
},
{
  question: "Which option is used to view hidden formatting marks?",
  options: ["Paragraph symbol (¶)", "Zoom tool", "Gridlines", "Outline View"],
  answer: "Paragraph symbol (¶)"
},

// -------- EXCEL CONTINUED --------
{
  question: "What does the IF function do in Excel?",
  options: ["Adds values", "Tests a condition", "Formats data", "Rounds numbers"],
  answer: "Tests a condition"
},
{
  question: "Which chart type compares parts of a whole?",
  options: ["Pie Chart", "Bar Chart", "Line Chart", "Column Chart"],
  answer: "Pie Chart"
},
{
  question: "Which function removes extra spaces from text?",
  options: ["=CLEAN()", "=TRIM()", "=SPACE()", "=REMOVE()"],
  answer: "=TRIM()"
},
{
  question: "Which function is used to find the current date?",
  options: ["=DATE()", "=NOW()", "=TODAY()", "=CURRENT()"],
  answer: "=TODAY()"
},
{
  question: "Which feature lets you summarize large data quickly?",
  options: ["AutoSum", "Filter", "PivotTable", "Data Table"],
  answer: "PivotTable"
},

// -------- POWERPOINT CONTINUED --------
{
  question: "What does the Animation Pane do?",
  options: ["Add background", "Set slide timing", "Control animation order", "Create new slides"],
  answer: "Control animation order"
},
{
  question: "Which tab is used to insert audio or video?",
  options: ["Media", "Insert", "Design", "Animations"],
  answer: "Insert"
},
{
  question: "SmartArt is used for:",
  options: ["Creating shapes", "Adding themes", "Designing diagrams", "Slide transitions"],
  answer: "Designing diagrams"
},
{
  question: "Which view is best for preparing speaker notes?",
  options: ["Normal View", "Notes Page View", "Slide Sorter", "Reading View"],
  answer: "Notes Page View"
},
{
  question: "Which shortcut switches to slide show from current slide?",
  options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
  answer: "Shift + F5"
},

// -------- TALLY PRIME CONTINUED --------
{
  question: "Which key is used to open 'Day Book' in Tally?",
  options: ["Alt + F1", "Alt + D", "Ctrl + D", "F5"],
  answer: "Alt + F1"
},
{
  question: "In Tally, the shortcut to alter a ledger is:",
  options: ["Alt + G", "Alt + E", "Ctrl + Enter", "Ctrl + L"],
  answer: "Ctrl + Enter"
},
{
  question: "What is the default method of stock valuation in Tally?",
  options: ["FIFO", "LIFO", "Average Cost", "Standard Cost"],
  answer: "FIFO"
},
{
  question: "Which is not a type of voucher in Tally?",
  options: ["Payment", "Sales", "Attendance", "Import"],
  answer: "Import"
},
{
  question: "In which menu is 'Security Control' available?",
  options: ["Gateway of Tally > Features", "Gateway of Tally > Company Info", "Company Info > Security Control", "Display > Security"],
  answer: "Company Info > Security Control"
},

// -------- PAGEMAKER CONTINUED --------
{
  question: "What is the use of 'Text Wrap' in PageMaker?",
  options: ["Align text", "Flow text around object", "Add columns", "Set margins"],
  answer: "Flow text around object"
},
{
  question: "Which command is used to align objects?",
  options: ["Utilities > Align", "Layout > Align", "Element > Align", "Arrange > Align"],
  answer: "Arrange > Align"
},
{
  question: "What is a Master Page in PageMaker?",
  options: ["A template for repeated elements", "Cover page", "Table of content", "Custom page size"],
  answer: "A template for repeated elements"
},
{
  question: "In PageMaker, kerning refers to:",
  options: ["Spacing between characters", "Font size", "Line spacing", "Page margins"],
  answer: "Spacing between characters"
},
{
  question: "Which tool is used to rotate an object?",
  options: ["Hand Tool", "Rotation Tool", "Pointer Tool", "Line Tool"],
  answer: "Rotation Tool"
},

// -------- PHOTOSHOP CONTINUED --------
{
  question: "Which key temporarily switches to the Move Tool?",
  options: ["V", "M", "Ctrl", "Spacebar"],
  answer: "Ctrl"
},
{
  question: "Which tool is used to clone an area of an image?",
  options: ["Healing Brush", "Clone Stamp", "Patch Tool", "Brush Tool"],
  answer: "Clone Stamp"
},
{
  question: "To zoom in and out, which tool is used?",
  options: ["Zoom Tool", "Magnify Tool", "Navigator", "View Tool"],
  answer: "Zoom Tool"
},
{
  question: "Which option adjusts brightness and contrast?",
  options: ["Filter > Sharpen", "Image > Adjustments", "Layer > Style", "Edit > Preferences"],
  answer: "Image > Adjustments"
},
{
  question: "Which format is best for high-quality print?",
  options: [".jpg", ".tiff", ".png", ".gif"],
  answer: ".tiff"
},

// -------- ACCESS CONTINUED --------
{
  question: "What is a report in MS Access?",
  options: ["For input", "For editing", "For printing and viewing data", "For adding records"],
  answer: "For printing and viewing data"
},
{
  question: "What is Referential Integrity?",
  options: ["Prevent deletion of data", "Ensure consistent data between related tables", "Insert blank fields", "Secure a database"],
  answer: "Ensure consistent data between related tables"
},
{
  question: "In Access, a record is:",
  options: ["A field", "A row of data", "A column", "A relation"],
  answer: "A row of data"
},
{
  question: "Which view shows the structure of a table?",
  options: ["Table View", "Form View", "Design View", "Query View"],
  answer: "Design View"
},
{
  question: "Which button saves the database file?",
  options: ["Ctrl + S", "Ctrl + P", "Alt + S", "F12"],
  answer: "Ctrl + S"
},

// -------- INTERNET CONTINUED --------
{
  question: "What does HTTP stand for?",
  options: ["HyperText Transfer Protocol", "HyperText Tool Program", "HighText Transfer Protocol", "Hyper Transfer Tool Protocol"],
  answer: "HyperText Transfer Protocol"
},
{
  question: "Which one is a valid domain extension?",
  options: [".www", ".com", ".http", ".ftp"],
  answer: ".com"
},
{
  question: "Which one is not a search engine?",
  options: ["Bing", "DuckDuckGo", "Amazon", "Google"],
  answer: "Amazon"
},
{
  question: "What is used to translate domain names into IP addresses?",
  options: ["ISP", "Router", "DNS", "IP Tracker"],
  answer: "DNS"
},
{
  question: "Which website protocol is insecure?",
  options: ["HTTPS", "HTTP", "SSL", "SFTP"],
  answer: "HTTP"
},

// -------- HTML CONTINUED --------
{
  question: "Which tag creates a line break in HTML?",
  options: ["<br>", "<lb>", "<break>", "<newline>"],
  answer: "<br>"
},
{
  question: "Which HTML element defines the document title?",
  options: ["<meta>", "<head>", "<title>", "<header>"],
  answer: "<title>"
},
{
  question: "Which tag is used to create a dropdown list?",
  options: ["<dropdown>", "<list>", "<select>", "<option>"],
  answer: "<select>"
},
{
  question: "HTML tags are:",
  options: ["Case-sensitive", "Always uppercase", "Not case-sensitive", "Always lowercase"],
  answer: "Not case-sensitive"
},
{
  question: "Which tag is used to make text italic?",
  options: ["<i>", "<b>", "<em>", "<it>"],
  answer: "<i>"
},
// -------- MS WORD --------
{
  question: "Which shortcut key is used to underline text?",
  options: ["Ctrl + U", "Ctrl + B", "Ctrl + L", "Ctrl + T"],
  answer: "Ctrl + U"
},
{
  question: "Which feature sets the distance between lines of text?",
  options: ["Line Spacing", "Alignment", "Indent", "Wrap Text"],
  answer: "Line Spacing"
},
{
  question: "How do you add footnotes in Word?",
  options: ["Insert > Notes", "References > Insert Footnote", "View > Footnote", "Layout > Footnote"],
  answer: "References > Insert Footnote"
},

// -------- EXCEL --------
{
  question: "Which function returns the current time?",
  options: ["=NOW()", "=TIME()", "=CURRENT()", "=TODAY()"],
  answer: "=NOW()"
},
{
  question: "Which Excel tool highlights duplicate values?",
  options: ["Conditional Formatting", "Data Validation", "Find & Replace", "Format Painter"],
  answer: "Conditional Formatting"
},
{
  question: "Which error means invalid cell reference?",
  options: ["#REF!", "#VALUE!", "#NAME?", "#N/A"],
  answer: "#REF!"
},

// -------- POWERPOINT --------
{
  question: "Which feature allows setting automatic slide timing?",
  options: ["Rehearse Timings", "Slide Master", "SmartArt", "Transition Speed"],
  answer: "Rehearse Timings"
},
{
  question: "Which tab lets you change slide orientation?",
  options: ["Design", "Layout", "Slide Show", "Page Setup"],
  answer: "Design"
},

// -------- TALLY --------
{
  question: "Which report shows outstanding payable/receivable?",
  options: ["Trial Balance", "Day Book", "Ledger", "Outstanding Report"],
  answer: "Outstanding Report"
},
{
  question: "Which shortcut is used to shut a company?",
  options: ["Alt + F1", "Alt + F2", "Alt + F3", "Ctrl + Q"],
  answer: "Alt + F1"
},

// -------- PAGEMAKER --------
{
  question: "What is 'leading' in PageMaker?",
  options: ["Line spacing", "Text alignment", "Font style", "Header spacing"],
  answer: "Line spacing"
},
{
  question: "What is the function of 'Pasteboard' in PageMaker?",
  options: ["Temporary storage area", "Clipboard", "Workspace outside the page", "Image insertion tool"],
  answer: "Workspace outside the page"
},

// -------- PHOTOSHOP --------
{
  question: "Which panel is used to manage history of actions?",
  options: ["Actions", "Layers", "Navigator", "History"],
  answer: "History"
},
{
  question: "Which menu contains image resizing?",
  options: ["Edit", "Layer", "Image", "View"],
  answer: "Image"
},
{
  question: "Which Photoshop tool selects based on shape?",
  options: ["Lasso Tool", "Quick Selection Tool", "Marquee Tool", "Move Tool"],
  answer: "Marquee Tool"
},

// -------- ACCESS --------
{
  question: "In Access, a field is:",
  options: ["A column", "A row", "A form", "A report"],
  answer: "A column"
},
{
  question: "Which object helps you to input data easily?",
  options: ["Query", "Form", "Report", "Macro"],
  answer: "Form"
},

// -------- INTERNET --------
{
  question: "Which type of website allows user interaction?",
  options: ["Static", "Dynamic", "Flat File", "Read-Only"],
  answer: "Dynamic"
},
{
  question: "What is the use of bookmarks in browsers?",
  options: ["Download files", "Save websites for later", "Clear history", "Block ads"],
  answer: "Save websites for later"
},
{
  question: "What is a firewall?",
  options: ["Antivirus", "Security system to monitor traffic", "Programming language", "Web server"],
  answer: "Security system to monitor traffic"
},

// -------- HTML --------
{
  question: "Which tag creates a table row?",
  options: ["<td>", "<tr>", "<table>", "<th>"],
  answer: "<tr>"
},
{
  question: "How to create an email link in HTML?",
  options: ["<a href='mailto:abc@example.com'>", "<email>", "<link email>", "<a href='mail=abc@'>"],
  answer: "<a href='mailto:abc@example.com'>"
},
{
  question: "Which tag creates a horizontal line?",
  options: ["<line>", "<hr>", "<hl>", "<hline>"],
  answer: "<hr>"
},

// -------- FUNDAMENTALS --------
{
  question: "What is the brain of the computer?",
  options: ["CPU", "RAM", "Hard Drive", "Monitor"],
  answer: "CPU"
},
{
  question: "Which part of computer is both input and output?",
  options: ["Monitor", "Keyboard", "Touchscreen", "Printer"],
  answer: "Touchscreen"
},
{
  question: "Which key combination is used to open Task Manager?",
  options: ["Ctrl + Alt + Del", "Alt + F4", "Ctrl + Shift + Esc", "Ctrl + Alt + T"],
  answer: "Ctrl + Shift + Esc"
},
{
  question: "What is the default port for HTTP?",
  options: ["80", "443", "20", "25"],
  answer: "80"
},
{
  question: "What does GUI stand for?",
  options: ["Graphical User Interface", "General User Interface", "Global Unified Interface", "Graphics Unit Interface"],
  answer: "Graphical User Interface"
},

// -------- SHORTCUTS & BASICS --------
{
  question: "What is the shortcut to open Windows Run?",
  options: ["Ctrl + R", "Alt + R", "Windows + R", "Shift + R"],
  answer: "Windows + R"
},
{
  question: "What does Ctrl + Z do?",
  options: ["Redo", "Zoom", "Undo", "Delete"],
  answer: "Undo"
},
{
  question: "Which shortcut is used to open File Explorer?",
  options: ["Ctrl + E", "Windows + E", "Alt + E", "Shift + E"],
  answer: "Windows + E"
},
{
  question: "To rename a file/folder quickly:",
  options: ["F2", "F5", "Ctrl + R", "Alt + R"],
  answer: "F2"
},
{
  question: "Which function key refreshes the active window?",
  options: ["F2", "F5", "F4", "F9"],
  answer: "F5"
},
{
  question: "Which key is used to enter BIOS setup during boot?",
  options: ["F2 or Del", "F1", "Esc", "F9"],
  answer: "F2 or Del"
},
{
  question: "What is the main function of RAM?",
  options: ["Permanent storage", "Temporary memory", "Backup storage", "Display memory"],
  answer: "Temporary memory"
},
{
  question: "Which company developed Windows OS?",
  options: ["Apple", "IBM", "Microsoft", "Intel"],
  answer: "Microsoft"
},
{
  question: "Which memory is non-volatile?",
  options: ["RAM", "Cache", "ROM", "Register"],
  answer: "ROM"
},
{
  question: "Which unit measures speed of processor?",
  options: ["MHz", "GHz", "Bit", "Volt"],
  answer: "GHz"
},
  {
    question: "What does ALU stand for?",
    options: ["Arithmetic Logic Unit", "Advanced Logic Unit", "Access Logic Utility", "Algorithmic Logic Unit"],
    answer: "Arithmetic Logic Unit"
  },
  {
    question: "Which device is considered an input device?",
    options: ["Printer", "Monitor", "Mouse", "Speaker"],
    answer: "Mouse"
  },
  {
    question: "What is the full form of ROM?",
    options: ["Readable Only Memory", "Read On Memory", "Read Only Memory", "Random Only Memory"],
    answer: "Read Only Memory"
  },
  {
    question: "What is the function of the Control Unit in a computer?",
    options: ["Performs arithmetic", "Stores data", "Controls all operations", "Transfers data"],
    answer: "Controls all operations"
  },
  {
    question: "Binary code is made up of:",
    options: ["0 and 1", "A and B", "1 and 2", "None of these"],
    answer: "0 and 1"
  },
  {
    question: "Which one is an output device?",
    options: ["Keyboard", "Scanner", "Speaker", "Mouse"],
    answer: "Speaker"
  },
  {
    question: "Who is known as the father of the computer?",
    options: ["Tim Berners-Lee", "Charles Babbage", "Bill Gates", "Alan Turing"],
    answer: "Charles Babbage"
  },
  {
    question: "1 Kilobyte (KB) = ?",
    options: ["1000 bytes", "1024 bytes", "512 bytes", "100 bytes"],
    answer: "1024 bytes"
  },
  {
    question: "Which of these is not an input device?",
    options: ["Microphone", "Keyboard", "Monitor", "Mouse"],
    answer: "Monitor"
  },
  {
    question: "The brain of the computer is called:",
    options: ["CPU", "RAM", "Hard Disk", "ROM"],
    answer: "CPU"
  },
  {
    question: "Which of these is volatile memory?",
    options: ["ROM", "RAM", "Hard Disk", "SSD"],
    answer: "RAM"
  },
  {
    question: "What is the permanent memory built into your computer?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: "ROM"
  },
  {
    question: "Which of the following is an operating system?",
    options: ["MS Word", "Linux", "Chrome", "Photoshop"],
    answer: "Linux"
  },
  {
    question: "Which one is a storage device?",
    options: ["CPU", "Keyboard", "Monitor", "Hard Disk"],
    answer: "Hard Disk"
  },
  {
    question: "Which software is used to create documents?",
    options: ["MS Excel", "MS Word", "PowerPoint", "Photoshop"],
    answer: "MS Word"
  },
  {
    question: "Which of the following is system software?",
    options: ["MS Word", "Photoshop", "Operating System", "Tally"],
    answer: "Operating System"
  },
  {
    question: "Which key is used to delete characters to the left of the cursor?",
    options: ["Delete", "Backspace", "Ctrl", "Insert"],
    answer: "Backspace"
  },
  {
    question: "What is a file?",
    options: ["A printed page", "A storage unit", "A folder", "A keyboard command"],
    answer: "A storage unit"
  },
  {
    question: "Which is not a type of computer?",
    options: ["Micro", "Mini", "Super", "Compact"],
    answer: "Compact"
  },
  {
    question: "What is the full form of CPU?",
    options: ["Central Processing Unit", "Control Processing Unit", "Central Program Unit", "Computer Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which key is used to refresh a webpage?",
    options: ["F4", "F5", "F2", "F1"],
    answer: "F5"
  },
  {
    question: "Which language does the computer understand?",
    options: ["English", "Binary", "C++", "Hindi"],
    answer: "Binary"
  },
  {
    question: "What is the full form of USB?",
    options: ["Uniform System Bus", "Universal Serial Bus", "Universal System Bridge", "Unified Signal Bus"],
    answer: "Universal Serial Bus"
  },
  {
    question: "Which of the following is not a type of software?",
    options: ["System", "Application", "Utility", "Compiler"],
    answer: "Compiler"
  },
  {
    question: "Which of the following is not a browser?",
    options: ["Chrome", "Firefox", "Safari", "Windows"],
    answer: "Windows"
  },
  {
    question: "What does GUI stand for?",
    options: ["Graphical User Interface", "General User Interface", "Graph User Internet", "Graphical Unified Interface"],
    answer: "Graphical User Interface"
  },
  {
    question: "Which part of the computer helps in communication with the user?",
    options: ["Software", "Hardware", "User Interface", "Processor"],
    answer: "User Interface"
  },
  {
    question: "What does 'www' stand for?",
    options: ["World Web Window", "World Wide Web", "Web World Wide", "Wide Web World"],
    answer: "World Wide Web"
  },
  {
    question: "Which one is not a programming language?",
    options: ["Python", "HTML", "C++", "MS Word"],
    answer: "MS Word"
  },
  {
    question: "Where is data stored temporarily?",
    options: ["Hard Disk", "ROM", "RAM", "SSD"],
    answer: "RAM"
  },
  {
    question: "Which of the following is a search engine?",
    options: ["Facebook", "Google", "Wikipedia", "MS Word"],
    answer: "Google"
  },
  {
    question: "Which of these is used for video conferencing?",
    options: ["MS Word", "Zoom", "Photoshop", "Excel"],
    answer: "Zoom"
  },
  {
    question: "Which of the following is an email service?",
    options: ["Chrome", "Outlook", "Google Maps", "Zoom"],
    answer: "Outlook"
  },
  {
    question: "Which among the following is a computer port?",
    options: ["USB", "SMS", "HTTP", "PDF"],
    answer: "USB"
  },
  {
    question: "Which company developed Windows OS?",
    options: ["Apple", "Google", "Microsoft", "IBM"],
    answer: "Microsoft"
  },
  {
  question: "Which of the following file formats preserves formatting and allows sharing without editing?",
  options: [".docx", ".txt", ".pdf", ".html"],
  answer: ".pdf"
},
{
  question: "In MS Word, what does the 'Track Changes' feature do?",
  options: ["Tracks typing speed", "Records changes made to a document", "Counts number of pages", "Highlights spelling mistakes"],
  answer: "Records changes made to a document"
},
{
  question: "Which option is used to restrict editing in a Word document?",
  options: ["File > Save As", "Review > Protect Document", "Insert > Header", "View > Zoom"],
  answer: "Review > Protect Document"
},
{
  question: "Which tab is used to insert citations and manage sources in Word?",
  options: ["References", "Layout", "Insert", "Design"],
  answer: "References"
},
{
  question: "A macro in Word is used to:",
  options: ["Create a new document", "Automate repetitive tasks", "Change font style", "Insert tables"],
  answer: "Automate repetitive tasks"
},
{
  question: "Which view is best for editing headers and footers?",
  options: ["Draft", "Web Layout", "Print Layout", "Outline"],
  answer: "Print Layout"
},
{
  question: "What is the shortcut for 'Justify' alignment in MS Word?",
  options: ["Ctrl + L", "Ctrl + R", "Ctrl + J", "Ctrl + E"],
  answer: "Ctrl + J"
},
{
  question: "Which feature automatically fixes spelling errors while typing?",
  options: ["Spell Check", "AutoCorrect", "Thesaurus", "Smart Lookup"],
  answer: "AutoCorrect"
},
{
  question: "Which command is used to compare two versions of a document?",
  options: ["Review > Compare", "View > Side by Side", "Insert > Text", "References > Cross-reference"],
  answer: "Review > Compare"
},
{
  question: "The Mail Merge feature is used to:",
  options: ["Combine data from Excel", "Create a list of emails", "Create personalized letters in bulk", "Merge two documents"],
  answer: "Create personalized letters in bulk"
},
{
  question: "Which option inserts reusable document parts like headers and footers?",
  options: ["Quick Parts", "Text Box", "Table", "Cover Page"],
  answer: "Quick Parts"
},
{
  question: "Which file extension is used for macro-enabled Word documents?",
  options: [".docx", ".dotx", ".docm", ".txt"],
  answer: ".docm"
},
{
  question: "Which of the following is NOT a section break in Word?",
  options: ["Next Page", "Continuous", "Even Page", "Double Page"],
  answer: "Double Page"
},
{
  question: "In page layout, what is a 'widow'?",
  options: ["First line of a paragraph alone at bottom of page", "Last line at bottom", "First line at top", "Table on next page"],
  answer: "First line of a paragraph alone at bottom of page"
},
{
  question: "Which feature gives grammar suggestions in Word?",
  options: ["Editor", "Dictionary", "Speller", "Reference Checker"],
  answer: "Editor"
},
{
  question: "Which function returns the relative position of an item in an array?",
  options: ["MATCH()", "VLOOKUP()", "INDEX()", "FIND()"],
  answer: "MATCH()"
},
{
  question: "Which function returns the value of a cell from a specific row and column?",
  options: ["HLOOKUP()", "INDEX()", "LOOKUP()", "INDIRECT()"],
  answer: "INDEX()"
},
{
  question: "Which of the following is a volatile function in Excel?",
  options: ["NOW()", "LEN()", "VLOOKUP()", "ROUND()"],
  answer: "NOW()"
},
{
  question: "What will the formula =IFERROR(A1/B1, \"Error\") return if B1 is 0?",
  options: ["#DIV/0!", "FALSE", "Error", "0"],
  answer: "Error"
},
{
  question: "Which function counts the number of non-empty cells?",
  options: ["COUNT()", "COUNTA()", "COUNTIF()", "COUNTBLANK()"],
  answer: "COUNTA()"
},
{
  question: "What does the formula =AND(TRUE,FALSE) return?",
  options: ["TRUE", "FALSE", "1", "0"],
  answer: "FALSE"
},
{
  question: "Which chart type is best for comparing parts of a whole?",
  options: ["Pie Chart", "Line Chart", "Bar Chart", "Scatter Plot"],
  answer: "Pie Chart"
},
{
  question: "What does the fill handle in Excel allow you to do?",
  options: ["Copy formulas", "Enter data", "Create charts", "Format cells"],
  answer: "Copy formulas"
},
{
  question: "Which feature in Excel prevents duplicate entries in a column?",
  options: ["Data Validation", "Conditional Formatting", "Protect Sheet", "Filter"],
  answer: "Data Validation"
},
{
  question: "Which function is used to combine text from multiple cells?",
  options: ["JOIN()", "MERGE()", "CONCATENATE()", "GLUE()"],
  answer: "CONCATENATE()"
},
{
  question: "Which shortcut key inserts the current date in Excel?",
  options: ["Ctrl + ;", "Ctrl + Shift + :", "Ctrl + D", "Alt + D"],
  answer: "Ctrl + ;"
},
{
  question: "How do you create a drop-down list in a cell?",
  options: ["Data > Validation", "Insert > List", "Home > Dropdown", "Review > Input"],
  answer: "Data > Validation"
},
{
  question: "Which of these functions can return the nth largest value?",
  options: ["MAX()", "LARGE()", "RANK()", "IF()"],
  answer: "LARGE()"
},
{
  question: "Which function checks if a condition is TRUE or FALSE?",
  options: ["IF()", "ISERROR()", "AND()", "OR()"],
  answer: "IF()"
},
{
  question: "Which error means an invalid cell reference?",
  options: ["#REF!", "#VALUE!", "#DIV/0!", "#NAME?"],
  answer: "#REF!"
},
{
  question: "Which view is used to manage the timing and effects of animations?",
  options: ["Slide Sorter", "Reading View", "Animation Pane", "Outline View"],
  answer: "Animation Pane"
},
{
  question: "Which file type allows you to open a presentation directly in slideshow mode?",
  options: [".pptx", ".potx", ".ppsx", ".pdf"],
  answer: ".ppsx"
},
{
  question: "Which feature allows you to insert pre-designed slide layouts?",
  options: ["Themes", "Slide Master", "Templates", "SmartArt"],
  answer: "Slide Master"
},
{
  question: "Which tab is used to add motion path animations?",
  options: ["Transitions", "Animations", "Design", "Slide Show"],
  answer: "Animations"
},
{
  question: "Which feature lets you record voice narration in a presentation?",
  options: ["Insert > Audio", "Slide Show > Record Slide Show", "Review > Comment", "View > Notes Page"],
  answer: "Slide Show > Record Slide Show"
},
{
  question: "What is the default slide size in PowerPoint 2016 and later?",
  options: ["4:3", "5:4", "16:9", "16:10"],
  answer: "16:9"
},
{
  question: "Which feature allows live collaboration in PowerPoint?",
  options: ["Notes Pane", "Presenter View", "Share", "Smart Lookup"],
  answer: "Share"
},
{
  question: "Which shortcut starts slideshow from the current slide?",
  options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + S"],
  answer: "Shift + F5"
},
{
  question: "What is the purpose of the Rehearse Timings feature?",
  options: ["To test animations", "To check spelling", "To practice slide timings", "To edit the master layout"],
  answer: "To practice slide timings"
},
{
  question: "Which object can be used to add organizational charts?",
  options: ["SmartArt", "WordArt", "Table", "Text Box"],
  answer: "SmartArt"
},
{
  question: "Which key combination opens the Relationships window in MS Access?",
  options: ["Ctrl + R", "Ctrl + J", "Ctrl + Shift + R", "Alt + F8"],
  answer: "Ctrl + R"
},
{
  question: "What is a foreign key in Access?",
  options: ["Primary key of current table", "Unique ID from a different table", "AutoNumber field", "Password field"],
  answer: "Unique ID from a different table"
},
{
  question: "Which object is used to retrieve data based on conditions?",
  options: ["Table", "Query", "Form", "Report"],
  answer: "Query"
},
{
  question: "Which field property ensures that no two records have the same value?",
  options: ["Input Mask", "Required", "Validation Rule", "Indexed (No Duplicates)"],
  answer: "Indexed (No Duplicates)"
},
{
  question: "Which data type stores long text paragraphs?",
  options: ["Text", "Memo", "String", "LongText"],
  answer: "Memo"
},
{
  question: "Which view is used to define data types and field names?",
  options: ["Design View", "Datasheet View", "Form View", "Layout View"],
  answer: "Design View"
},
{
  question: "Which query type is used to change data in multiple records?",
  options: ["Append Query", "Update Query", "Select Query", "Crosstab Query"],
  answer: "Update Query"
},
{
  question: "Which feature connects two tables based on a related field?",
  options: ["Join", "Relationship", "Mapping", "Linking"],
  answer: "Relationship"
},
{
  question: "Which wizard helps in creating complex reports quickly?",
  options: ["Report Wizard", "Query Wizard", "Macro Wizard", "Import Wizard"],
  answer: "Report Wizard"
},
{
  question: "Which Access object allows you to automate tasks with buttons and events?",
  options: ["Macro", "Module", "Query", "Field"],
  answer: "Macro"
},
{
  question: "Which shortcut is used to alter company details in Tally Prime?",
  options: ["Alt + F3", "Alt + D", "Ctrl + A", "Alt + C"],
  answer: "Alt + F3"
},
{
  question: "Which type of voucher is used for recording credit purchases?",
  options: ["Payment Voucher", "Sales Voucher", "Purchase Voucher", "Journal Voucher"],
  answer: "Purchase Voucher"
},
{
  question: "Which feature allows creating multiple companies in Tally?",
  options: ["F11 > Features", "Gateway of Tally > Create Company", "Alt + F3", "Company Info > Group Company"],
  answer: "Company Info > Group Company"
},
{
  question: "Which ledger group does 'Salaries' belong to by default?",
  options: ["Indirect Expenses", "Direct Expenses", "Current Liabilities", "Capital Account"],
  answer: "Indirect Expenses"
},
{
  question: "What does the F11 key open in Tally Prime?",
  options: ["Features", "Company Info", "Inventory Info", "Chart of Accounts"],
  answer: "Features"
},
{
  question: "Which inventory valuation method calculates the average cost of items?",
  options: ["FIFO", "LIFO", "Average Cost", "Standard Cost"],
  answer: "Average Cost"
},
{
  question: "Which report displays all transactions in voucher-wise format?",
  options: ["Day Book", "Trial Balance", "Ledger", "Balance Sheet"],
  answer: "Day Book"
},
{
  question: "Which menu allows you to enable GST in Tally?",
  options: ["F11 > Statutory & Taxation", "Inventory Info", "Accounting Vouchers", "Gateway > Display"],
  answer: "F11 > Statutory & Taxation"
},
{
  question: "What does Ctrl + Enter do in Tally?",
  options: ["Opens master in alter mode", "Enters a new line", "Deletes a record", "Copies a record"],
  answer: "Opens master in alter mode"
},
{
  question: "Which ledger group should 'GST Payable' be classified under?",
  options: ["Duties and Taxes", "Current Assets", "Loans", "Indirect Incomes"],
  answer: "Duties and Taxes"
},
{
  question: "Which tool allows you to select an area based on color similarity in Photoshop?",
  options: ["Magic Wand Tool", "Lasso Tool", "Marquee Tool", "Crop Tool"],
  answer: "Magic Wand Tool"
},
{
  question: "Which menu in Photoshop lets you adjust Levels and Curves?",
  options: ["Edit", "Image", "Filter", "View"],
  answer: "Image"
},
{
  question: "Which shortcut is used to duplicate a layer?",
  options: ["Ctrl + J", "Ctrl + D", "Ctrl + C", "Ctrl + L"],
  answer: "Ctrl + J"
},
{
  question: "Which of the following formats supports layers?",
  options: [".jpg", ".png", ".psd", ".bmp"],
  answer: ".psd"
},
{
  question: "What does the Clone Stamp Tool do?",
  options: ["Stretches image", "Copies pixels from one part to another", "Adds noise", "Creates 3D effects"],
  answer: "Copies pixels from one part to another"
},
{
  question: "Which panel allows adjusting the transparency of a layer?",
  options: ["Layers Panel", "History Panel", "Navigator Panel", "Tool Options"],
  answer: "Layers Panel"
},
{
  question: "Which color mode is used for printing?",
  options: ["RGB", "CMYK", "Grayscale", "Lab"],
  answer: "CMYK"
},
{
  question: "Which tool is best for removing blemishes from a photo?",
  options: ["Healing Brush", "Brush Tool", "Crop Tool", "Blur Tool"],
  answer: "Healing Brush"
},
{
  question: "What does 'Desaturate' do to an image?",
  options: ["Increases contrast", "Converts to black and white", "Brightens image", "Flips image"],
  answer: "Converts to black and white"
},
{
  question: "Which command lets you undo multiple steps in Photoshop 7.0?",
  options: ["Ctrl + Z", "Ctrl + Alt + Z", "Ctrl + Shift + Z", "Ctrl + Y"],
  answer: "Ctrl + Alt + Z"
},
{
  question: "Which HTML tag is used to define metadata about an HTML document?",
  options: ["<meta>", "<head>", "<title>", "<link>"],
  answer: "<meta>"
},
{
  question: "Which input type allows users to select a date?",
  options: ["text", "datetime", "calendar", "date"],
  answer: "date"
},
{
  question: "What does the 'action' attribute in the <form> tag define?",
  options: ["Form appearance", "Form data destination", "Form alignment", "Form background color"],
  answer: "Form data destination"
},
{
  question: "Which tag is used to define a table header in HTML?",
  options: ["<td>", "<th>", "<tr>", "<header>"],
  answer: "<th>"
},
{
  question: "Which HTML element defines the document title shown in browser tab?",
  options: ["<meta>", "<head>", "<title>", "<h1>"],
  answer: "<title>"
},
{
  question: "Which HTML5 tag is used to mark navigation links?",
  options: ["<navigate>", "<menu>", "<nav>", "<header>"],
  answer: "<nav>"
},
{
  question: "Which tag is used to embed an image in HTML?",
  options: ["<src>", "<img>", "<image>", "<pic>"],
  answer: "<img>"
},
{
  question: "Which attribute specifies an alternate text for an image?",
  options: ["src", "alt", "title", "text"],
  answer: "alt"
},
{
  question: "Which tag is used to group inline-elements and apply styles?",
  options: ["<div>", "<section>", "<span>", "<group>"],
  answer: "<span>"
},
{
  question: "Which doctype declaration is correct for HTML5?",
  options: ["<!DOCTYPE html5>", "<!HTML5>", "<!DOCTYPE html>", "<HTML5>"],
  answer: "<!DOCTYPE html>"
},
{
  question: "Which key is used to constrain a line to 45-degree angles in PageMaker?",
  options: ["Shift", "Alt", "Ctrl", "Tab"],
  answer: "Shift"
},
{
  question: "What is the use of the 'Story Editor' in PageMaker?",
  options: ["To create stories", "To edit text content separately", "To insert pictures", "To export PDFs"],
  answer: "To edit text content separately"
},
{
  question: "Which menu is used to create a booklet layout?",
  options: ["Layout", "File", "Utilities", "Type"],
  answer: "Layout"
},
{
  question: "What is the function of the 'Pasteboard' in PageMaker?",
  options: ["To store unused items", "To print extra pages", "To write notes", "To hide objects"],
  answer: "To store unused items"
},
{
  question: "Which extension is used to save PageMaker templates?",
  options: [".pmt", ".pmd", ".pag", ".pm7"],
  answer: ".pmt"
},
{
  question: "What does the 'Control Palette' do in PageMaker?",
  options: ["Controls printing", "Manages plug-ins", "Changes object properties", "Formats paragraph"],
  answer: "Changes object properties"
},
{
  question: "Which tool is used to link text blocks across pages?",
  options: ["Pointer Tool", "Text Tool", "Chain Tool", "Frame Tool"],
  answer: "Chain Tool"
},
{
  question: "Which command lets you adjust word spacing automatically?",
  options: ["Kerning", "Tracking", "Justify", "Hyphenation"],
  answer: "Hyphenation"
},
{
  question: "Which option allows exporting a PageMaker file to PDF?",
  options: ["Export > PDF", "File > Print to Adobe PDF", "Utilities > Convert", "Window > Publish"],
  answer: "File > Print to Adobe PDF"
},
{
  question: "Which feature is used to combine text and graphics in a design?",
  options: ["Frames", "Templates", "Styles", "Pasteboard"],
  answer: "Frames"
},
{
  question: "What is the default port number for HTTPS?",
  options: ["443", "80", "21", "110"],
  answer: "443"
},
{
  question: "Which protocol is used to send emails?",
  options: ["SMTP", "POP3", "FTP", "IMAP"],
  answer: "SMTP"
},
{
  question: "What does 'IP' stand for in networking?",
  options: ["Internet Protocol", "Internet Port", "Internal Path", "Input Provider"],
  answer: "Internet Protocol"
},
{
  question: "Which browser engine is used by Google Chrome?",
  options: ["Blink", "WebKit", "Gecko", "Trident"],
  answer: "Blink"
},
{
  question: "What is the full form of DNS?",
  options: ["Domain Name System", "Digital Network Service", "Direct Name Server", "Domain Network Storage"],
  answer: "Domain Name System"
},
{
  question: "Which of the following is NOT a valid domain extension?",
  options: [".edu", ".org", ".gov", ".netx"],
  answer: ".netx"
},
{
  question: "Which tool is used to check the reachability of a host in a network?",
  options: ["Ping", "DNS", "Traceroute", "FTP"],
  answer: "Ping"
},
{
  question: "Which part of the URL indicates the domain name?",
  options: ["www.example.com", "https", "/index.html", "html"],
  answer: "www.example.com"
},
{
  question: "Which type of internet connection uses telephone lines and allows simultaneous phone calls?",
  options: ["Dial-up", "DSL", "Fiber", "Satellite"],
  answer: "DSL"
},
{
  question: "Which organization is responsible for managing IP addresses globally?",
  options: ["IANA", "ICANN", "W3C", "IEEE"],
  answer: "IANA"
},
{
  question: "Which type of memory is non-volatile and can be electrically erased and rewritten?",
  options: ["RAM", "ROM", "Cache", "Flash"],
  answer: "Flash"
},
{
  question: "Which device uses laser technology to read and write data?",
  options: ["HDD", "CD/DVD Drive", "SSD", "RAM"],
  answer: "CD/DVD Drive"
},
{
  question: "Which of the following is an input as well as output device?",
  options: ["Keyboard", "Mouse", "Touchscreen", "Scanner"],
  answer: "Touchscreen"
},
{
  question: "Which part of the CPU carries out arithmetic and logical operations?",
  options: ["CU", "ALU", "MU", "RAM"],
  answer: "ALU"
},
{
  question: "Which generation of computers introduced microprocessors?",
  options: ["First", "Second", "Third", "Fourth"],
  answer: "Fourth"
},
{
  question: "What does POST stand for in computer startup?",
  options: ["Power On Self Test", "Program Operating Standard Test", "Primary Output System Test", "Processor Output Setup Test"],
  answer: "Power On Self Test"
},
{
  question: "Which key is used to open Task Manager directly?",
  options: ["Ctrl + Shift + Esc", "Alt + Tab", "Ctrl + Alt + Del", "Shift + Esc"],
  answer: "Ctrl + Shift + Esc"
},
{
  question: "Which file extension represents an executable file?",
  options: [".exe", ".txt", ".docx", ".html"],
  answer: ".exe"
},
{
  question: "Which part of a computer connects the CPU to RAM and other components?",
  options: ["Bus", "Bridge", "Cache", "Router"],
  answer: "Bus"
},
{
  question: "What is the shortcut to rename a selected file or folder?",
  options: ["F2", "Ctrl + R", "Alt + N", "Ctrl + Shift + R"],
  answer: "F2"
},
{
  question: "Which of the following is a volatile memory?",
  options: ["ROM", "Flash", "RAM", "SSD"],
  answer: "RAM"
},
{
  question: "Which command is used to view directory contents in Command Prompt?",
  options: ["dir", "ls", "cd", "md"],
  answer: "dir"
},
{
  question: "What does the BIOS do?",
  options: ["Loads operating system", "Runs applications", "Controls graphics", "Manages printers"],
  answer: "Loads operating system"
},
{
  question: "Which key combination locks the computer screen?",
  options: ["Windows + L", "Ctrl + L", "Alt + L", "Ctrl + Shift + L"],
  answer: "Windows + L"
},
{
  question: "Which part of a computer is responsible for booting?",
  options: ["RAM", "BIOS", "HDD", "GPU"],
  answer: "BIOS"
},
{
  question: "Which function returns the relative position of an item in an array that matches a specified value?",
  options: ["MATCH()", "INDEX()", "LOOKUP()", "SEARCH()"],
  answer: "MATCH()"
},
{
  question: "Which function is used to look up both row and column in Excel?",
  options: ["HLOOKUP()", "INDEX()", "VLOOKUP()", "INDEX(MATCH())"],
  answer: "INDEX(MATCH())"
},
{
  question: "What does the formula =INDIRECT(\"A\" & 1) return?",
  options: ["Value in cell A1", "String 'A1'", "Error", "Cell reference A1"],
  answer: "Value in cell A1"
},
{
  question: "Which Excel function is used to return a value if a condition is FALSE?",
  options: ["IFERROR()", "IF()", "IFNA()", "IFNOT()"],
  answer: "IF()"
},
{
  question: "Which function evaluates multiple conditions and returns the first TRUE result?",
  options: ["IF()", "IFS()", "CHOOSE()", "SWITCH()"],
  answer: "IFS()"
},
{
  question: "Which formula helps find the 3rd largest value in a range?",
  options: ["=MAX(A1:A10,3)", "=LARGE(A1:A10,3)", "=BIG(A1:A10,3)", "=TOP(A1:A10,3)"],
  answer: "=LARGE(A1:A10,3)"
},
{
  question: "Which function counts cells that meet multiple criteria?",
  options: ["COUNTIF()", "COUNTA()", "COUNTIFS()", "IFCOUNT()"],
  answer: "COUNTIFS()"
},
{
  question: "Which function can be used to get the current date and time?",
  options: ["=TODAY()", "=NOW()", "=DATE()", "=TIME()"],
  answer: "=NOW()"
},
{
  question: "What will =LEN(\"Excel 2025\") return?",
  options: ["9", "10", "8", "11"],
  answer: "10"
},
{
  question: "Which formula can extract the domain from an email in cell A1?",
  options: ["=RIGHT(A1,FIND(\"@\",A1))", "=MID(A1,FIND(\"@\",A1)+1,50)", "=DOMAIN(A1)", "=TEXT(A1,\"domain\")"],
  answer: "=MID(A1,FIND(\"@\",A1)+1,50)"
},
{
  question: "Which chart is best to compare parts of a whole over time?",
  options: ["Pie Chart", "Stacked Column Chart", "Line Chart", "Radar Chart"],
  answer: "Stacked Column Chart"
},
{
  question: "What is Power Query used for in Excel?",
  options: ["Creating charts", "Data visualization", "Data import & transform", "Protecting worksheets"],
  answer: "Data import & transform"
},
{
  question: "Which Excel feature can merge and analyze data from multiple ranges?",
  options: ["Consolidate", "Scenario Manager", "Group", "Pivot Table"],
  answer: "Consolidate"
},
{
  question: "What does the formula =SUBTOTAL(9, A1:A10) do?",
  options: ["Counts values", "Sums values", "Shows maximum", "Ignores blanks"],
  answer: "Sums values"
},
{
  question: "Which function can generate a random number between two values?",
  options: ["=RAND()", "=RANDOM()", "=RANDBETWEEN()", "=CHOOSE()"],
  answer: "=RANDBETWEEN()"
},
{
  question: "Which feature allows you to control the layout and look of all slides at once?",
  options: ["Design Ideas", "Slide Master", "Template View", "Layout Manager"],
  answer: "Slide Master"
},
{
  question: "Which file format should you use to maintain animation when sharing a presentation?",
  options: [".pptx", ".potx", ".ppsx", ".pdf"],
  answer: ".ppsx"
},
{
  question: "Which view is best for setting up custom navigation buttons?",
  options: ["Slide Show View", "Reading View", "Normal View", "Slide Master View"],
  answer: "Slide Master View"
},
{
  question: "What does the Morph transition do?",
  options: ["Fade in text", "Creates 3D flip", "Smooth motion between similar objects", "Zooms into image"],
  answer: "Smooth motion between similar objects"
},
{
  question: "Which shortcut starts slideshow from the current slide?",
  options: ["F5", "Ctrl + F5", "Shift + F5", "Alt + S"],
  answer: "Shift + F5"
},
{
  question: "Which feature allows you to record narration and timings?",
  options: ["Presenter View", "Rehearse Timings", "Record Slide Show", "Notes Master"],
  answer: "Record Slide Show"
},
{
  question: "How can you hyperlink to another slide within the same presentation?",
  options: ["Insert > Hyperlink > Place in This Document", "Insert > Object", "Insert > Action > Run Program", "Insert > Reference"],
  answer: "Insert > Hyperlink > Place in This Document"
},
{
  question: "Which feature allows you to add interactive quizzes in PowerPoint?",
  options: ["Animations", "Hyperlink", "Action Buttons", "Developer Tab Macros"],
  answer: "Action Buttons"
},
{
  question: "Which tab allows you to insert SmartArt?",
  options: ["Insert", "Design", "Layout", "Animations"],
  answer: "Insert"
},
{
  question: "Which file extension is used for a PowerPoint template?",
  options: [".ppt", ".potx", ".pps", ".pptm"],
  answer: ".potx"
},
{
  question: "Which feature in Tally allows audit of transactions and tracks user modifications?",
  options: ["Tally Vault", "Tally Audit", "Statutory Audit", "Internal Control"],
  answer: "Tally Audit"
},
{
  question: "In GST configuration, which option enables automatic tax calculation?",
  options: ["Enable GST in F11", "Enable GST in Inventory", "Set/alter GST details", "Activate Ledger VAT"],
  answer: "Set/alter GST details"
},
{
  question: "Which voucher is used to reverse a wrongly entered transaction?",
  options: ["Journal Voucher", "Debit Note", "Reversing Journal", "Credit Note"],
  answer: "Reversing Journal"
},
{
  question: "Which report in Tally shows pending purchase orders?",
  options: ["Outstanding Payables", "Purchase Register", "Order Book", "Pending Orders"],
  answer: "Order Book"
},
{
  question: "Which shortcut is used to view Day Book in Tally?",
  options: ["Ctrl + F1", "Alt + D", "D", "Alt + F1"],
  answer: "Alt + F1"
},
{
  question: "Which of the following is used to activate e-Way bill feature in Tally?",
  options: ["GST Enable > EWB Required", "Enable e-Invoicing", "EWB Registration No.", "Add e-Way Fields in Ledger"],
  answer: "GST Enable > EWB Required"
},
{
  question: "Which ledger group should 'GST Output' be classified under?",
  options: ["Current Liabilities", "Indirect Income", "Duties and Taxes", "Current Assets"],
  answer: "Duties and Taxes"
},
{
  question: "What is the purpose of ‘Scenario Management’ in Tally?",
  options: ["Create invoices", "Allow budget comparisons", "View provisional reports", "Manage inventory rates"],
  answer: "View provisional reports"
},
{
  question: "Which shortcut opens the Company Features menu?",
  options: ["F11", "F12", "Alt + F1", "Ctrl + F3"],
  answer: "F11"
},
{
  question: "In Tally Prime, how is multi-currency feature enabled?",
  options: ["Inventory Settings", "F11 > Accounting Features", "Ledger Settings", "F12 > General Configuration"],
  answer: "F11 > Accounting Features"
},
{
  question: "Which Photoshop tool is used to paint over an area to match the surrounding pixels?",
  options: ["Clone Stamp Tool", "Healing Brush Tool", "Patch Tool", "Blur Tool"],
  answer: "Healing Brush Tool"
},
{
  question: "Which key do you hold to create a perfect circle using the Ellipse Tool?",
  options: ["Alt", "Ctrl", "Shift", "Spacebar"],
  answer: "Shift"
},
{
  question: "Which file format preserves all layers and allows future editing?",
  options: [".jpg", ".png", ".psd", ".gif"],
  answer: ".psd"
},
{
  question: "What does the Quick Mask mode allow you to do?",
  options: ["Preview a layer", "Edit selections using brush", "Flatten layers", "Apply filters"],
  answer: "Edit selections using brush"
},
{
  question: "Which Photoshop panel allows adjustment of Hue/Saturation, Levels, and Curves?",
  options: ["Layers Panel", "Adjustments Panel", "History Panel", "Paths Panel"],
  answer: "Adjustments Panel"
},
{
  question: "Which blend mode makes black transparent while keeping white visible?",
  options: ["Multiply", "Screen", "Overlay", "Lighten"],
  answer: "Screen"
},
{
  question: "Which tool is used to move an entire layer or selection?",
  options: ["Hand Tool", "Move Tool", "Marquee Tool", "Transform Tool"],
  answer: "Move Tool"
},
{
  question: "Which key is used to toggle between Brush and Eraser quickly?",
  options: ["E", "B", "Ctrl + E", "Alt + B"],
  answer: "B"
},
{
  question: "Which export option is best for transparent web graphics?",
  options: ["Export As JPG", "Save for Web PNG-24", "Save as BMP", "Export as TIFF"],
  answer: "Save for Web PNG-24"
},
{
  question: "What does the 'Feather' option do in selection tools?",
  options: ["Makes edges softer", "Adds brightness", "Sharpens edges", "Increases contrast"],
  answer: "Makes edges softer"
},
{
  question: "Which HTML5 tag represents self-contained content like blog posts or articles?",
  options: ["<section>", "<article>", "<aside>", "<div>"],
  answer: "<article>"
},
{
  question: "What is the purpose of the <canvas> element in HTML5?",
  options: ["To embed videos", "To draw graphics using JavaScript", "To display static images", "To create forms"],
  answer: "To draw graphics using JavaScript"
},
{
  question: "Which tag is used to specify a container for external application or plugin?",
  options: ["<embed>", "<object>", "<iframe>", "<applet>"],
  answer: "<object>"
},
{
  question: "Which attribute is used with <input> tag to specify expected data format?",
  options: ["type", "pattern", "format", "validate"],
  answer: "pattern"
},
{
  question: "What is the use of the 'required' attribute in forms?",
  options: ["It makes the field hidden", "It disables auto-fill", "It forces the user to fill before submitting", "It restricts length"],
  answer: "It forces the user to fill before submitting"
},
{
  question: "Which tag is used to define navigation links in HTML5?",
  options: ["<navigate>", "<menu>", "<nav>", "<header>"],
  answer: "<nav>"
},
{
  question: "Which API is used to store data locally in the user's browser without expiration?",
  options: ["SessionStorage", "Cookies", "LocalStorage", "WebSQL"],
  answer: "LocalStorage"
},
{
  question: "Which tag is used to embed an audio file in HTML5?",
  options: ["<sound>", "<media>", "<audio>", "<play>"],
  answer: "<audio>"
},
{
  question: "What is the purpose of the <datalist> tag?",
  options: ["To create dropdown menu", "To provide autocomplete options", "To list data from API", "To filter forms"],
  answer: "To provide autocomplete options"
},
{
  question: "Which HTML5 API allows the user’s current physical location to be retrieved?",
  options: ["Geolocation API", "DeviceOrientation API", "GPS API", "LocationService API"],
  answer: "Geolocation API"
},
{
  question: "Which type of relationship ensures referential integrity between two tables?",
  options: ["One-to-One", "One-to-Many with Enforced Referential Integrity", "Many-to-Many", "Unrelated"],
  answer: "One-to-Many with Enforced Referential Integrity"
},
{
  question: "What is the purpose of a 'parameter query' in Access?",
  options: ["To display static data", "To sort records", "To prompt user input during query execution", "To validate entries"],
  answer: "To prompt user input during query execution"
},
{
  question: "Which type of join returns all records from both tables, even without a match?",
  options: ["Inner Join", "Left Join", "Right Join", "Full Outer Join"],
  answer: "Full Outer Join"
},
{
  question: "Which SQL clause is used in Access to filter grouped data?",
  options: ["WHERE", "HAVING", "ORDER BY", "GROUP"],
  answer: "HAVING"
},
{
  question: "What is the default file extension for Access 2007 and later?",
  options: [".mdb", ".accdb", ".dbf", ".acc"],
  answer: ".accdb"
},
{
  question: "In which view can you manually add calculated fields in a query?",
  options: ["Design View", "Datasheet View", "Form View", "Report View"],
  answer: "Design View"
},
{
  question: "Which query type allows you to make changes (insert/update/delete) in records?",
  options: ["Select Query", "Action Query", "CrossTab Query", "Union Query"],
  answer: "Action Query"
},
{
  question: "Which field property prevents duplicate values in a table column?",
  options: ["Validation Rule", "Required", "Indexed (No Duplicates)", "Format"],
  answer: "Indexed (No Duplicates)"
},
{
  question: "What is a 'subform' in MS Access?",
  options: ["Form inside a table", "Another view of table", "Form within another form linked to related data", "An add-on feature"],
  answer: "Form within another form linked to related data"
},
{
  question: "Which function in a query returns the number of records?",
  options: ["=COUNT()", "SUM()", "TOTAL()", "NUM()"],
  answer: "=COUNT()"
},
{
  question: "Which protocol is used to translate domain names into IP addresses?",
  options: ["HTTP", "FTP", "DNS", "DHCP"],
  answer: "DNS"
},
{
  question: "What is the purpose of the HTTPS protocol?",
  options: ["File transfer", "Faster browsing", "Secure communication over HTTP", "Server identification only"],
  answer: "Secure communication over HTTP"
},
{
  question: "Which port number is used by HTTPS by default?",
  options: ["80", "21", "443", "110"],
  answer: "443"
},
{
  question: "What is the function of a firewall in a computer network?",
  options: ["Enhance speed", "Restrict access based on rules", "Assign IP addresses", "Translate URLs"],
  answer: "Restrict access based on rules"
},
{
  question: "Which version of IP uses 128-bit address format?",
  options: ["IPv4", "IPv5", "IPv6", "IPX"],
  answer: "IPv6"
},
{
  question: "Which protocol is used for sending emails?",
  options: ["SMTP", "POP3", "IMAP", "HTTP"],
  answer: "SMTP"
},
{
  question: "Which of the following is a private IP address?",
  options: ["192.168.1.1", "8.8.8.8", "172.0.0.1", "220.120.10.1"],
  answer: "192.168.1.1"
},
{
  question: "Which tool is used to check the route taken by data packets?",
  options: ["ping", "ipconfig", "netstat", "tracert"],
  answer: "tracert"
},
{
  question: "What does the term 'bandwidth' refer to in networking?",
  options: ["Security level", "Connection type", "Data transfer rate", "Signal strength"],
  answer: "Data transfer rate"
},
{
  question: "Which layer of the OSI model does the IP protocol operate in?",
  options: ["Application", "Transport", "Network", "Session"],
  answer: "Network"
},
{
  question: "Which of the following is volatile memory?",
  options: ["ROM", "SSD", "RAM", "HDD"],
  answer: "RAM"
},
{
  question: "Which component is responsible for executing instructions in a computer?",
  options: ["Hard Drive", "ALU", "BIOS", "RAM"],
  answer: "ALU"
},
{
  question: "Which of the following is not part of the booting process?",
  options: ["POST", "BIOS Loading", "Kernel Execution", "Shut Down"],
  answer: "Shut Down"
},
{
  question: "What is the purpose of cache memory?",
  options: ["Store system software", "Store frequently accessed data", "Backup RAM", "Run diagnostics"],
  answer: "Store frequently accessed data"
},
{
  question: "Which register holds the address of the next instruction to be executed?",
  options: ["MAR", "PC", "IR", "ACC"],
  answer: "PC"
},
{
  question: "Which of these is an example of secondary storage?",
  options: ["Register", "Cache", "Hard Disk", "Accumulator"],
  answer: "Hard Disk"
},
{
  question: "What is the full form of BIOS?",
  options: ["Binary Input Output System", "Basic Input Output System", "Built-in Operating Setup", "Base Integrated OS"],
  answer: "Basic Input Output System"
},
{
  question: "Which type of memory is permanently programmed during manufacturing?",
  options: ["EEPROM", "PROM", "ROM", "RAM"],
  answer: "ROM"
},
{
  question: "Which bus is used to transfer data between CPU and memory?",
  options: ["Data Bus", "Address Bus", "Control Bus", "Power Bus"],
  answer: "Data Bus"
},
{
  question: "Which software initiates hardware checks when a computer is powered on?",
  options: ["Bootloader", "BIOS", "OS", "Kernel"],
  answer: "BIOS"
},
{
  question: "Which shortcut key opens the 'Run' dialog box in Windows?",
  options: ["Ctrl + R", "Windows + R", "Alt + R", "Shift + R"],
  answer: "Windows + R"
},
{
  question: "Which shortcut key switches between open applications in reverse order?",
  options: ["Alt + Tab", "Shift + Alt + Tab", "Ctrl + Tab", "Alt + Shift"],
  answer: "Shift + Alt + Tab"
},
{
  question: "Which shortcut pastes plain text (without formatting) in most programs?",
  options: ["Ctrl + Shift + V", "Ctrl + Alt + V", "Ctrl + V", "Alt + Shift + V"],
  answer: "Ctrl + Shift + V"
},
{
  question: "What does Ctrl + F6 do in MS Word?",
  options: ["Opens Navigation Pane", "Switches to next document window", "Finds text", "Closes window"],
  answer: "Switches to next document window"
},
{
  question: "Which key combination locks the computer screen in Windows?",
  options: ["Ctrl + L", "Alt + L", "Windows + L", "Ctrl + Alt + Del"],
  answer: "Windows + L"
},
{
  question: "What is the shortcut for 'Insert Hyperlink' in Word?",
  options: ["Ctrl + K", "Ctrl + H", "Alt + K", "Ctrl + Alt + K"],
  answer: "Ctrl + K"
},
{
  question: "Which shortcut key opens Task Manager directly?",
  options: ["Ctrl + Alt + Del", "Ctrl + Shift + Esc", "Ctrl + Esc", "Alt + Esc"],
  answer: "Ctrl + Shift + Esc"
},
{
  question: "Which shortcut closes the current tab in most web browsers?",
  options: ["Ctrl + W", "Ctrl + Q", "Alt + W", "Ctrl + Shift + W"],
  answer: "Ctrl + W"
},
{
  question: "Which shortcut jumps to the beginning of a document in Word?",
  options: ["Ctrl + Up Arrow", "Home", "Ctrl + Home", "Alt + Home"],
  answer: "Ctrl + Home"
},
{
  question: "Which shortcut opens 'Find' or 'Search' in almost all applications?",
  options: ["Ctrl + F", "Alt + F", "Shift + F", "Ctrl + Shift + F"],
  answer: "Ctrl + F"
},
{
  question: "Which feature in MS Word allows you to track changes made by multiple users?",
  options: ["Smart Lookup", "Track Changes", "Version History", "AutoRecover"],
  answer: "Track Changes"
},
{
  question: "Which tab contains the Mail Merge option in Word?",
  options: ["Insert", "Mailings", "References", "Review"],
  answer: "Mailings"
},
{
  question: "Which feature automatically corrects common spelling errors?",
  options: ["Spell Check", "Thesaurus", "AutoCorrect", "Grammar Check"],
  answer: "AutoCorrect"
},
{
  question: "What is the shortcut key to center align text in Word?",
  options: ["Ctrl + L", "Ctrl + C", "Ctrl + E", "Ctrl + R"],
  answer: "Ctrl + E"
},
{
  question: "Which tab allows you to insert a SmartArt graphic?",
  options: ["Insert", "Layout", "Review", "References"],
  answer: "Insert"
},
{
  question: "What is the default paper size in MS Word (India)?",
  options: ["A4", "Letter", "Legal", "Executive"],
  answer: "A4"
},
{
  question: "Which Word feature lets you restrict editing in a document?",
  options: ["Document Lock", "Editing Restriction", "Password Protect", "Restrict Editing"],
  answer: "Restrict Editing"
},
{
  question: "Which of these formats keeps Word formatting when saving?",
  options: [".txt", ".docx", ".pdf", ".rtf"],
  answer: ".docx"
},
{
  question: "Which shortcut key opens the Font dialog box?",
  options: ["Ctrl + D", "Ctrl + F", "Ctrl + G", "Ctrl + H"],
  answer: "Ctrl + D"
},
{
  question: "Which feature helps create a table of contents?",
  options: ["Insert > Index", "Layout > List", "References > Table of Contents", "View > Outline"],
  answer: "References > Table of Contents"
},
{
  question: "Which tool helps compare two versions of a document?",
  options: ["Track Changes", "Compare Documents", "Merge Tools", "Layout Preview"],
  answer: "Compare Documents"
},
{
  question: "What is a watermark in Word?",
  options: ["Image behind text", "Header text", "Text color", "Font style"],
  answer: "Image behind text"
},
{
  question: "Which feature adjusts line spacing automatically?",
  options: ["Auto Fit", "Line and Paragraph Spacing", "Wrap Text", "Spacing Tool"],
  answer: "Line and Paragraph Spacing"
},
{
  question: "Which view is best for editing headers and footers?",
  options: ["Draft View", "Print Layout", "Read Mode", "Web Layout"],
  answer: "Print Layout"
},
{
  question: "What is the use of the 'Format Painter'?",
  options: ["To remove formatting", "To copy formatting", "To paint shapes", "To color background"],
  answer: "To copy formatting"
},
{
  question: "Which PowerPoint feature allows movement from one slide to another with animation?",
  options: ["Transition", "Animation", "Slide Show", "Design"],
  answer: "Transition"
},
{
  question: "Which view lets you rearrange slides in thumbnail format?",
  options: ["Normal View", "Outline View", "Slide Sorter View", "Reading View"],
  answer: "Slide Sorter View"
},
{
  question: "Which file format is used to run the presentation directly?",
  options: [".pptx", ".potx", ".ppsx", ".pdf"],
  answer: ".ppsx"
},
{
  question: "Which shortcut key starts the slideshow from current slide?",
  options: ["F5", "Shift + F5", "Ctrl + F5", "Alt + F5"],
  answer: "Shift + F5"
},
{
  question: "What is the use of the 'Rehearse Timings' option?",
  options: ["To check design", "To auto-format slides", "To record slide timings", "To insert media"],
  answer: "To record slide timings"
},
{
  question: "Which feature adds motion to text or objects?",
  options: ["Transition", "Animation", "Format", "Slide Zoom"],
  answer: "Animation"
},
{
  question: "Which PowerPoint view is best for editing speaker notes?",
  options: ["Normal", "Slide Sorter", "Slide Show", "Notes Page"],
  answer: "Notes Page"
},
{
  question: "Which tab allows inserting charts and SmartArt?",
  options: ["Design", "Insert", "Review", "Animations"],
  answer: "Insert"
},
{
  question: "Which command combines multiple shapes into one?",
  options: ["Group", "Merge Shapes", "Align", "Arrange"],
  answer: "Merge Shapes"
},
{
  question: "Which pane shows the outline of the presentation?",
  options: ["Slide Pane", "Notes Pane", "Outline Pane", "Task Pane"],
  answer: "Outline Pane"
},
{
  question: "Which voucher type is used for recording purchase transactions?",
  options: ["F5", "F6", "F7", "F9"],
  answer: "F9"
},
{
  question: "Which key is used to shut a company in Tally Prime?",
  options: ["Alt + F1", "Alt + F3", "Ctrl + Q", "Alt + Q"],
  answer: "Alt + F1"
},
{
  question: "What is the function of the 'Gateway of Tally'?",
  options: ["To open reports", "Main menu to access all features", "Print documents", "Backup data"],
  answer: "Main menu to access all features"
},
{
  question: "Which menu helps in managing user roles and permissions?",
  options: ["Gateway of Tally", "Features", "Security Control", "Masters"],
  answer: "Security Control"
},
{
  question: "Which feature allows GST configuration in Tally?",
  options: ["Tax Settings", "Statutory & Taxation", "Accounting Info", "Inventory Info"],
  answer: "Statutory & Taxation"
},
{
  question: "Which shortcut is used to create a ledger in Tally Prime?",
  options: ["Alt + C", "Ctrl + L", "F11", "Ctrl + C"],
  answer: "Alt + C"
},
{
  question: "Which report shows a list of outstanding receivables?",
  options: ["Stock Summary", "Trial Balance", "Ledger", "Outstanding Report"],
  answer: "Outstanding Report"
},
{
  question: "Which shortcut key is used to view the Day Book?",
  options: ["Ctrl + D", "F1", "Alt + D", "D + Enter"],
  answer: "Ctrl + D"
},
{
  question: "Which of the following is not a voucher type in Tally?",
  options: ["Payment", "Receipt", "Payroll", "Profit"],
  answer: "Profit"
},
{
  question: "Which option helps in taking backup in Tally Prime?",
  options: ["Data Backup", "Restore", "Export", "Import"],
  answer: "Data Backup"
},
{
  question: "Which HTML tag is used to define an internal style sheet?",
  options: ["<style>", "<css>", "<script>", "<link>"],
  answer: "<style>"
},
{
  question: "What is the purpose of the <em> tag in HTML?",
  options: ["Make text bold", "Emphasize text (italic)", "Underline text", "Add a comment"],
  answer: "Emphasize text (italic)"
},
{
  question: "Which attribute is used to open a link in a new tab?",
  options: ["href='_blank'", "target='_blank'", "new='true'", "link='tab'"],
  answer: "target='_blank'"
},
{
  question: "What does semantic HTML mean?",
  options: ["Using tags for layout only", "Meaningful tags for content structure", "Using inline styles", "Complex code"],
  answer: "Meaningful tags for content structure"
},
{
  question: "Which HTML tag is used to embed a video file?",
  options: ["<media>", "<video>", "<object>", "<file>"],
  answer: "<video>"
},
{
  question: "Which key opens the toolbox in PageMaker?",
  options: ["F1", "F2", "F3", "F4"],
  answer: "F4"
},
{
  question: "In PageMaker, which menu is used for creating Master Pages?",
  options: ["Layout", "Type", "Element", "View"],
  answer: "Layout"
},
{
  question: "Which unit is default in PageMaker for page layout?",
  options: ["Pixels", "Points", "Inches", "Centimeters"],
  answer: "Points"
},
{
  question: "Which tool is used to link text frames in PageMaker?",
  options: ["Text Tool", "Pointer Tool", "Chain Tool", "Link Tool"],
  answer: "Chain Tool"
},
{
  question: "What is the extension of a PageMaker 7.0 file?",
  options: [".pmd", ".pm", ".pgm", ".psd"],
  answer: ".pmd"
},
{
  question: "Which tool removes blemishes or spots in Photoshop?",
  options: ["Clone Stamp", "Healing Brush", "Red Eye Tool", "Patch Tool"],
  answer: "Healing Brush"
},
{
  question: "Which color model is used for screen display in Photoshop?",
  options: ["CMYK", "RGB", "Grayscale", "Bitmap"],
  answer: "RGB"
},
{
  question: "What is the function of the 'Layers' panel in Photoshop?",
  options: ["Zoom control", "Adjust colors", "Manage image stacking", "Change background"],
  answer: "Manage image stacking"
},
{
  question: "What is the shortcut for 'Duplicate Layer' in Photoshop?",
  options: ["Ctrl + D", "Ctrl + Alt + D", "Ctrl + J", "Ctrl + L"],
  answer: "Ctrl + J"
},
{
  question: "Which format supports layers and transparency?",
  options: [".jpg", ".png", ".gif", ".psd"],
  answer: ".psd"
},
{
  question: "Which protocol is used to transfer web pages?",
  options: ["HTTP", "SMTP", "FTP", "IP"],
  answer: "HTTP"
},
{
  question: "Which browser developed the 'Blink' rendering engine?",
  options: ["Internet Explorer", "Firefox", "Chrome", "Safari"],
  answer: "Chrome"
},
{
  question: "Which of the following is not a search engine?",
  options: ["Google", "Bing", "Yahoo", "Linux"],
  answer: "Linux"
},
{
  question: "Which service assigns IP addresses to devices automatically?",
  options: ["DNS", "HTTP", "DHCP", "FTP"],
  answer: "DHCP"
},
{
  question: "What is the function of a domain name?",
  options: ["Identifies email", "Stores web files", "User-friendly address for a website", "Encrypts data"],
  answer: "User-friendly address for a website"
},
{
  question: "Which Internet term refers to fake websites imitating real ones?",
  options: ["Spoofing", "Caching", "Streaming", "Redirecting"],
  answer: "Spoofing"
},
{
  question: "What is the function of the browser cache?",
  options: ["Save passwords", "Increase RAM", "Store website data temporarily", "Block ads"],
  answer: "Store website data temporarily"
},
{
  question: "Which tag is used for creating a table row in HTML?",
  options: ["<th>", "<td>", "<tr>", "<row>"],
  answer: "<tr>"
},
{
  question: "Which tag represents the footer section of a web page?",
  options: ["<foot>", "<footer>", "<bottom>", "<end>"],
  answer: "<footer>"
},
{
  question: "What does FTP stand for?",
  options: ["File Transfer Protocol", "Fast Transfer Port", "File Transmission Port", "Folder Transmit Process"],
  answer: "File Transfer Protocol"
},
{
  question: "Which shortcut key is used to rename a selected file in Windows?",
  options: ["F2", "Ctrl + R", "Alt + Enter", "Shift + F6"],
  answer: "F2"
},
{
  question: "Which key combination is used to open Task Manager directly?",
  options: ["Ctrl + Shift + Esc", "Alt + Ctrl + Del", "Ctrl + Alt + T", "Ctrl + Alt + M"],
  answer: "Ctrl + Shift + Esc"
},
{
  question: "Which shortcut locks the screen instantly in Windows?",
  options: ["Windows + L", "Ctrl + Alt + L", "Alt + F4", "Ctrl + L"],
  answer: "Windows + L"
},
{
  question: "Which shortcut moves the cursor to the beginning of the document in MS Word?",
  options: ["Ctrl + Home", "Alt + Home", "Shift + Home", "Home"],
  answer: "Ctrl + Home"
},
{
  question: "Which shortcut key selects all content in a window or document?",
  options: ["Ctrl + A", "Ctrl + S", "Alt + A", "Shift + A"],
  answer: "Ctrl + A"
},
{
  question: "Which function key is used to open Help in most software?",
  options: ["F1", "F2", "F12", "Esc"],
  answer: "F1"
},
{
  question: "Which of the following is not an output device?",
  options: ["Monitor", "Printer", "Speaker", "Keyboard"],
  answer: "Keyboard"
},
{
  question: "Which device is used to convert hard copies to digital format?",
  options: ["Printer", "Monitor", "Scanner", "Projector"],
  answer: "Scanner"
},
{
  question: "What is the full form of GUI?",
  options: ["Graphical User Interface", "General User Interface", "Grouped User Interface", "Graphic Uniform Interface"],
  answer: "Graphical User Interface"
},
{
  question: "Which of the following is an example of system software?",
  options: ["MS Word", "Windows OS", "Photoshop", "Tally"],
  answer: "Windows OS"
},
{
  question: "What is the smallest unit of data in a computer?",
  options: ["Bit", "Byte", "Nibble", "Word"],
  answer: "Bit"
},
{
  question: "What is the brain of the computer?",
  options: ["RAM", "CPU", "ROM", "Hard Disk"],
  answer: "CPU"
},
{
  question: "Which type of memory is not volatile?",
  options: ["RAM", "Cache", "Register", "ROM"],
  answer: "ROM"
},
{
  question: "Which component manages all hardware and software on a computer?",
  options: ["Operating System", "CPU", "BIOS", "Power Supply"],
  answer: "Operating System"
},
{
  question: "Which of these is used to measure processor speed?",
  options: ["Hz", "Mbps", "KBps", "GB"],
  answer: "Hz"
},
{
  question: "Which storage device uses no moving parts?",
  options: ["Hard Disk", "SSD", "CD-ROM", "Floppy Disk"],
  answer: "SSD"
}
];
// Shuffle utility
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Select 70 random questions
const selectedQuestions = shuffleArray(quizData).slice(0, 70).map(q => ({
  ...q,
  options: shuffleArray([...q.options])
}));

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = selectedQuestions[currentQuestion];
  questionEl.innerText = `Question ${currentQuestion + 1} of 70:\n${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option";
    btn.onclick = () => selectOption(option, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectOption(selected, correct) {
  if (selected === correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

let container = document.querySelector(".container");
function showResult() {
  container.remove();
  questionEl.innerText = "Exam Finished!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.innerText = `${studentName} Your Score: ${score} out of ${selectedQuestions.length} with the percentage of:  (${((score / selectedQuestions.length) * 100).toFixed(2)}%)`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Start the quiz
loadQuestion();
window.addEventListener("keydown", function (e) {
  // F5 (keyCode 116) or Ctrl+R (keyCode 82 with ctrlKey)
  if ((e.key === "F5") || (e.ctrlKey && e.key === "r")) {
    e.preventDefault();
    alert("Page refresh is disabled during the exam!");
  }
});
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = ''; // Modern browsers use this
});

// Warn on browser refresh or close
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = '';
});
// Disable right-click context menu
document.addEventListener("contextmenu", event => event.preventDefault());

// Disable F12 and Ctrl+Shift+I (Developer Tools)
document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("Developer Tools are disabled!");
  }
});

const studentName = localStorage.getItem("studentName");
let std_name = document.getElementsByClassName("std_name");
std_name[0].innerText = studentName;

let time_element = document.querySelector('.time');
let total_time = 60 * 60; // 60 minutes in seconds
let minutes, seconds;

function updateTimer() {
  minutes = Math.floor(total_time / 60);
  seconds = total_time % 60;
  time_element.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (total_time > 0) {
    total_time--;
  }
}

setInterval(updateTimer, 1000);
setTimeout(() => {
  alert("Time is up! The exam will be submitted automatically.");
  showResult();
}, 60 * 60 * 1000); // 60 minutes in milliseconds

// Initial timer display
updateTimer();