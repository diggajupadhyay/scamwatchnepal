
# Scam Watch Nepal

**Scam Watch Nepal** is a simple Chrome extension designed to block specific Facebook pages that are known to scam people. The goal is to prevent users from accidentally visiting these harmful pages and protect them from potential scams.

## Features
- Blocks access to specified Facebook pages.
- Prevents loading of scam pages without redirecting the user.
- Easy to add new pages to the block list.

## How It Works
This extension uses the Chrome `declarativeNetRequest` API to block access to specific Facebook pages. If a user attempts to visit a blocked page, the request is halted, and the page does not load.

## Installation

1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/diggajupadhyay/scamwatchnepal.git
   ```
2. **Open Chrome Extensions Page**:
   - Open Google Chrome and navigate to `chrome://extensions/`.
3. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top right corner.
4. **Load Unpacked Extension**:
   - Click on the **Load unpacked** button.
   - Select the folder containing your project files.

The extension should now be active and will automatically block the list of specified Facebook pages from the `rules.json` file.

## Future Plans
- **Instagram Page/Profile Block**: Block specific Instagram profiles and pages that are known to spread scams.
- **YouTube Channel Block**: Block YouTube channels involved in fraudulent activities.
- **Website Block**: Add functionality to block specific scam websites.
- **Firefox and Other Browsers Support**: Extend support for Firefox and other popular browsers.
- **Looking for Contributors**: We are looking for contributors to help develop the extension for other browsers and add more features.

## To-Do List
- [x] Implement Facebook page blocking functionality.
- [ ] Add support for blocking Instagram profiles/pages.
- [ ] Implement YouTube channel blocking.
- [ ] Add functionality to block specific scam websites.
- [ ] Extend the extension support for Firefox and other browsers.
- [ ] Improve user interface for better usability.
- [ ] Documentation and help guide for new contributors.

## How to Add More Pages to the Block List
To add more pages to the block list, follow these steps:

1. Open the `rules.json` file located in the project directory.
2. Add a new entry to the list with the format:
   ```json
   {
     "id": <unique_id>,
     "priority": 1,
     "action": { "type": "block" },
     "condition": {
       "urlFilter": "*://*.facebook.com/page-to-block*",
       "resourceTypes": ["main_frame"]
     }
   }
   ```
3. Save the changes.
4. Reload the extension on the Chrome extensions page.

## Contributing
Contributions are welcome! If you have suggestions for improvements or additional features, please fork the repository and create a pull request. Follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [Google Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/mv3/)
- [DeclarativeNetRequest API](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)

## Contact
If you have any questions or suggestions, feel free to reach out to the project maintainer:
- **Diggaj Upadhyay**: [dcozupadhyay@gmail.com](mailto:diggajupadhyay@gmail.com)
- [GitHub](https://github.com/diggajupadhyay)