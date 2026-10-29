# Universal Android Download Interceptor (Chromium)

A universal Userscript designed for Android Chromium-based browsers (Brave, Google Chrome, Microsoft Edge, Vivaldi, Kiwi, Cromite, etc.) that automatically intercepts direct file downloads and triggers the native Android **"Choose Activity / Open With"** dialog. 

This enables you to effortlessly forward downloads to any installed download manager (such as **1DM**, **1DM+**, **ADM**, **Download Navi**, or **Aria2**) without manual link sharing or copying.

---

## ⚡ Features

- **Universal App Chooser:** Does not restrict you to a single app. Pops up all installed download managers.
- **Chromium Native Bypass:** Prevents Chromium browsers from starting internal, un-accelerated downloads.
- **Zero Clipboard Polling:** Uses native Android Intents instead of continuous clipboard monitoring.
- **Broad File Support:** Automatically catches media, archives, system packages, and document links.

---

## 📥 Supported Formats

- **Archives:** `.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.iso`
- **Android Packages:** `.apk`, `.xapk`, `.apkm`
- **Media Files:** `.mp4`, `.mkv`, `.webm`, `.avi`, `.mov`, `.3gp`, `.mp3`, `.aac`, `.flac`, `.wav`, `.ogg`
- **Documents:** `.pdf`, `.docx`, `.xlsx`, `.pptx`, `.epub`
- **System & Torrent:** `.exe`, `.msi`, `.bin`, `.img`, `.torrent`

---

## 📦 Prerequisites & Required LSPosed Modules

Standard mobile Chromium browsers (like Brave or Chrome) do not support desktop userscript extensions natively. To enable userscripts inside these browsers on a rooted Android device, set up the following tools:

1. **LSPosed Framework (Zygisk Release):**
   * Download the latest release from the [JingMatrix LSPosed Releases](https://github.com/JingMatrix/LSPosed/releases).
   * Flash the `.zip` file via your root manager (KernelSU / Magisk) and reboot.

2. **ChromeXt (Xposed Module for Chromium):**
   * Download the latest `ChromeXt-signed.apk` from the [JingMatrix ChromeXt Releases](https://github.com/JingMatrix/ChromeXt/releases).
   * Install the APK on your phone.
   * Open the **LSPosed Manager**, navigate to the **Modules** tab, enable **ChromeXt**, and check your target browser (e.g., **Brave**, **Chrome**) in the module's scope list.
   * Restart your device or force-stop the browser.

*(Note: If you use browsers with built-in desktop extension support like Kiwi or Cromite, you can simply install **Violentmonkey** from the Chrome Web Store without needing root/LSPosed).*

---

## 🚀 Installation & Setup

1. Open your Chromium browser (with ChromeXt active).
2. Navigate to this repository and click the **Raw** button on the `universal_download_interceptor.user.js` file.
3. ChromeXt will intercept the `.user.js` file and display an installation prompt.
4. Tap **Install** / **Confirm**.
5. Restart your browser.

---

## 🛠️ How to Use

1. Click any download link matching the supported file types in your browser.
2. Android will automatically bring up the **Choose activity / Open with** popup listing all your download managers.
3. Select your desired app (e.g., **1DM+**) and choose **Always** (if you want all future downloads to open directly in that app) or **Just Once**.

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
