(() => {

    const sceneInfo = [
        {
            // 0
            type: 'sticky',
            heightNum : 5, // 브라우저 높이의 5배로 scrollHeight 셋
            scrollHeight: 0,
        },
        {
            // 1
            type: 'normal',
            heightNum : 5, // 브라우저 높이의 5배로 scrollHeight 셋
            scrollHeight: 0,
        },
        {
            // 2
            type: 'sticky',
            heightNum : 5, // 브라우저 높이의 5배로 scrollHeight 셋
            scrollHeight: 0,
        },
        {
            // 3
            type: 'normal',
            heightNum : 5, // 브라우저 높이의 5배로 scrollHeight 셋
            scrollHeight: 0,
        }
    ];

    function setLayout() {
        // 각 스크롤 섹션의 높이 셋
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        }

        console.log(sceneInfo);
    }

    setLayout();

}) ();