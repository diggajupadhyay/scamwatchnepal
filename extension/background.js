const extensionId = chrome.runtime.id;
// Localhost
// const API_URL = `http://localhost:8888/.netlify/functions/getRules?extensionId=${extensionId}`;
// Netlify
const API_URL = `https://scamwatchnepal.netlify.app/.netlify/functions/getRules?extensionId=${extensionId}`;

async function fetchRules() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch rules');
  }
  return await response.json();
}

async function updateRules() {
  try {
    const newRules = await fetchRules();
    
    // Store the new rules
    await chrome.storage.local.set({ rules: newRules });

    // Get existing dynamic rules
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();

    // Remove all existing dynamic rules
    const removeRuleIds = existingRules.map(rule => rule.id);

    // Update the rules
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: removeRuleIds,
      addRules: newRules
    });

    console.log('Rules updated successfully');
  } catch (error) {
    console.error('Error updating rules:', error);
  }
}

// Update rules when the extension is installed or updated
chrome.runtime.onInstalled.addListener(updateRules);

// Update rules periodically (e.g., once a day)
chrome.alarms.create('updateRules', { periodInMinutes: 24 * 60 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'updateRules') {
    updateRules();
  }
});

// Apply stored rules on startup
chrome.runtime.onStartup.addListener(async () => {
  const { rules } = await chrome.storage.local.get('rules');
  if (rules) {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: await chrome.declarativeNetRequest.getDynamicRules().then(rules => rules.map(r => r.id)),
      addRules: rules
    });
  } else {
    // If no rules are stored, fetch and apply them
    await updateRules();
  }
});