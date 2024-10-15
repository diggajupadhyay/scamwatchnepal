exports.handler = async function(event, context) {
    const extensionId = event.queryStringParameters.extensionId;
  
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 204,
        headers: {
          'Access-Control-Allow-Origin': `chrome-extension://${extensionId}`,
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        },
      };
    }
  
    const rules = [
      {
        id: 1,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.facebook.com/NetflixNepalEverydayOnline*",
          resourceTypes: ["main_frame"]
        }
      },
      {
        id: 2,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*.facebook.com/profile.php?id=61565995941080",
          resourceTypes: ["main_frame"]
        }
      }
    ];
  
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': `chrome-extension://${extensionId}`,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
      body: JSON.stringify(rules)
    };
  };