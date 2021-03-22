async function showAvatar() {

	// JSON 읽기
	let response = await fetch('/article/promise-chaining/user.json');
	let user = await response.json();
  
	// github 사용자 정보 읽기
	let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
	let githubUser = await githubResponse.json();
  
	// 아바타 보여주기
	let img = document.createElement('img');
	img.src = githubUser.avatar_url;
	img.className = "promise-avatar-example";
	document.body.append(img);
  
	// 3초 대기
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
	img.remove();
  
	return githubUser;
  }
  
  showAvatar();