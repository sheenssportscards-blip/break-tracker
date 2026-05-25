exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    const params = new URLSearchParams(event.queryStringParameters);
    const challenge = event.queryStringParameters.challenge_code;
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ challengeResponse: challenge })
    };
  }
  if (event.httpMethod === 'POST') {
    console.log('Deletion notification:', event.body);
    return { statusCode: 200, body: '' };
  }
  return { statusCode: 405, body: 'Method not allowed' };
};
