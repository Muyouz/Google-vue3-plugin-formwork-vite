import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from '../package.json' assert { type: 'json' };
const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/)

export default defineManifest(async (env) => ({
  manifest_version: 3,
  version: `${major}.${minor}.${patch}`, // 插件版本取自 package.json

  name: "此处填写插件名称",
  description: "此处填写插件描述内容",
  homepage_url: "https://chrome.google.com",
  default_locale: "en", // 此处填写插件默认语言
  permissions: [],
  host_permissions:[],

  version_name: version,
  icons: {
    16: 'src/assets/icon/icon16.png',
    48: 'src/assets/icon/icon48.png',
    128: 'src/assets/icon/icon128.png',
  },
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'src/assets/icon/icon128.png',
  },
  content_scripts: [
		{
			"matches": ["<all_urls>"],
			"js": [
				"src/content-script/index.js"
			],
			"run_at": "document_start"
		}
	],
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  web_accessible_resources: [{
        "resources": ["src/assets/css/*", "src/assets/icon/*"],
		"matches": ["<all_urls>"]
	}],
	content_security_policy: {
	   "extension_pages": "script-src 'self'; object-src 'self'; frame-src 'self'; child-src 'self'"
	}
}))