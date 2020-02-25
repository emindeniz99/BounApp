
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
  //       'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
      },
  //     redirect: 'follow', // manual, *follow, error
  //     referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  



try {
    const data = await postData('https://www.tweetjs.com/API.aspx', { Action: "ListTweetsOnUserTimeline",
                  ScreenName: "hallcati" });
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  } catch (error) {
    console.error(error);
  }
  