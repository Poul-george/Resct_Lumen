// import React, { useState } from "react";
// import firebase, { storage } from "./firebase";

// function FileTest() {
//   const [image, setImage] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const handleImage = event => {
//     const image = event.target.files[0];
//     setImage(image);
//   };

//   // console.log(image);

//   const onSubmit = event => {
//     event.preventDefault();
//     if (image === "") {
//       console.log("ファイルが選択されていません");
//     }
//     // アップロード処理
//     const uploadTask = storage.ref(`/images/${image.name}`).put(image);
//     uploadTask.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       next,
//       error,
//       complete
//     );
//   };
//   const next = snapshot => {
//     // 進行中のsnapshotを得る
//     // アップロードの進行度を表示
//     const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     // console.log(percent + "% done");
//     // console.log(snapshot);
//   };
//   const error = error => {
//     // エラーハンドリング
//     console.log(error);
//   };
//   const complete = () => {
//     // 完了後の処理
//     // 画像表示のため、アップロードした画像のURLを取得
//     storage
//       .ref("images")
//       .child(image.name)
//       .getDownloadURL()
//       .then(fireBaseUrl => {
//         setImageUrl(fireBaseUrl);
//     });
//   };
//   return (
//     <div className="App">
//       <h1>画像アップロード</h1>
//       <form onSubmit={onSubmit}>
//         <input type="file" onChange={handleImage} />
//         <button>Upload</button>
//       </form>
//       <video src="3E42694B-7238-4ED2-BFD7-B8B043A9A576.mov"></video>
//     </div>
//   );
// }

// export default FileTest;