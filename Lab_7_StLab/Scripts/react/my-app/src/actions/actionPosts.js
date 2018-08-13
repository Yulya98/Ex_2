// import axios from "axios";
//
// var i = -1;
//
// export function handleClick(idPost){
//     return (dispatch) =>{
//         dispatch(changeIdPost(idPost));
//     }
// }
//
// export function changeIdPost(idPost){
//     return{
//         type:"CHANGE_ID_POST_AND_VISIBLE",
//         idPost: idPost,
//         isVisiblePost: true,
//         isVisiblePosts: false
//     }
// }
//
// export function openLightbox(event, obj) {
//     return (dispatch)=> {
//         const subPosts = this.props.subPosts;
//         setTimeout(() => {
//             dispatch(changeSubPosts(subPosts, obj));
//         }, 500)
//     }
// }
//
// export function changeSubPosts(subPosts,obj ) {
//     return{
//         type:"ADD_ITEM",
//         currentImage: obj.index,
//         lightboxIsOpen: true,
//         subPosts:subPosts
//     }
// }
//
// export function closeLightbox() {
//     return (dispatch)=> {
//         dispatch(closeImg());
//     }
// }
//
// export function closeImg(){
//     return{
//         type:"CLOSE_IMAGE",
//         currentImage: 0,
//         lightboxIsOpen: false
//     }
// }
//
// export function gotoPrevious(){
//    return (dispatch) => {
//        dispatch(toPreviosPhoto());
//    }
// }
//
// export function toPreviosPhoto() {
//     return{
//         type:"TO_PREVIOUS_PHOTO",
//         currentImage: this.props.currentImage-1
//     }
// }
//
// export function gotoNext() {
//     return (dispatch) => {
//         dispatch(gotoNextPhoto());
//     }
// }
//
// export function gotoNextPhoto() {
//     return{
//         type:"GO_TO_NEXT_PHOTO",
//         currentImage: this.props.currentImage + 1
//     }
// }
//
// export function goToAlbum(idUser){
//     return (dispatch) => {
//         dispatch(idUserChange(idUser));
//     }
// }
//
// export  function idUserChange(idUser) {
//     return{
//         type:"CHANGE_ID_USER",
//         idUser: idUser,
//         isVisibleAlbum: true,
//         isVisiblePosts: false
//     }
// }
//
// export function componentWillMount(context) {
//     return (dispatch) => {
//         axios.post('searchPosts')
//             .then((response) => {
//                 debugger;
//                 for (var i = 0; i < response.data.length; i += 4) {
//                     debugger;
//                     const obj = {
//                         postId: response.data[i],
//                         authorName: response.data[i + 1],
//                         image: [{src: response.data[i + 2], width: 1, height: 1}],
//                         idUser: response.data[i + 3]
//                     };
//                     dispatch(changePosts(obj));
//                 }
//                 var subPosts = [].concat(context.getItems(context)).concat(context.getItems(context));
//                 dispatch(changeSubPostss(subPosts));
//             });
//     }
// }
//
// export function changePosts(data){
//     return {
//         type: "CHANGE_POSTS",
//         posts: data
//     }
// }
//
// function getItems(context) {
//     return (dispatch)=>
//     {
//         if (typeof context.props.posts[0] != "undefined") {
//             i++;
//             debugger;
//             return (
//                 <div><span>{context.props.posts[i].authorName}</span>
//                     <Gallery photos={context.props.posts[i].image} onClick={context.props.openLightbox()}/>
//                     <Lightbox images={context.props.posts[i].image}
//                               onClose={context.props.closeLightbox()}
//                               onClickPrev={context.props.gotoPrevious()}
//                               onClickNext={context.props.gotoNext()}
//                               currentImage={context.props.currentImage}
//                               isOpen={context.props.lightboxIsOpen}
//                     />
//                     <button onClick={() => context.props.handleClick(context.props.posts[i].postId, context)}>Add
//                         comment
//                     </button>
//                     <button onClick={() => context.props.goToAlbum(context.props.posts[i].idUser)}>To Album</button>
//                 </div>
//             )
//         }
//         return (
//             <div>Loading...</div>
//         );
//         dispatch({type: "GET_ITEMS"});
//     }
// }
//
// export function handleScrollUp(context){
//     return (dispatch)=> {
//         const subPosts = [].concat(context.getItems(context)).concat(context.props.subPosts)
//         setTimeout(() => {
//             dispatch(scrollUp(subPosts));
//         }, 500)
//     }
// }
//
// export function scrollUp(data){
//     return{
//         type:"SCROLL_UP_EVENT",
//         subPosts: data
//     }
// }
//
// export function handleScrollDown(context) {
//     return (dispatch) => {
//         const subPosts = context.props.subPosts.concat(context.getItems(context))
//         setTimeout(() => {
//             dispatch(scrollDown(subPosts));
//         }, 500)
//     }
// }
//
// export function scrollDown(data){
//     return{
//         type:"SCROLL_DOWN_EVENT",
//         subPosts: data
//     }
// }
//
//
// export function changeSubPostss(data){
//     return {
//         type: "CHANGE_SUBPOSTS",
//         subPosts: data
//     }
// }
//
// export function  handleClick(e,context) {
//     return (dispatch) => {
//         e.preventDefault();
//         var obj = {};
//         obj.NameImg = context.state.nameImg;
//         obj.Path = context.state.value;
//         axios.post('addPhoto', obj);
//         const objs = {'original': obj.NameImg, 'thumbnail': obj.NameImg, 'description': obj.Path}
//         dispatch(changeState(obj));
//     }
// }
//
// export function changeState(data){
//     return{
//         type:"CHANGE_IMAGES",
//         images: data
//     }
// }
//
// export function onChangeDeleteItem(e) {
//     return (dispatch)=>
//     {
//         dispatch(changeDeleteItem)(e);
//     }
// }
//
// export function changeDeleteItem(e){
//     return{
//         type:"CHANGE_DELETE_ITEM",
//         deleteItem: e
//     }
// }
//
// export function onChangeNameImage(e) {
//     return (dispatch)=> {
//         dispatch(changeNameImage(e));
//     };
// }
//
// export function changeNameImage(e){
//     return{
//         type:"CHANGE_NAME_IMAGE",
//         nameImg: e
//     }
// }
//
// export function onChangePath(e) {
//       return (dispatch) =>{
//           dispatch(changePath(e));
//       }
// }
//
// export function changePath(e){
//     return{
//         type:"CHANGE_PATH",
//         path: e
//     }
// }
//
// export function deleteButton(deleteItem){
//     var obj = {};
//     obj.nameImg = deleteItem;
//     axios.post('deletePhoto',obj);
// }

export function changePosts(posts){
    debugger;
    return (dispatch) =>{
        dispatch(post(posts))
    }
}

export function post(post){
    return{
        type:"CHANGE_POSTS",
        posts: post
    }
}

export function changeSubPosts(subposts){
    debugger;
    return (dispatch) => {
        dispatch(subpost(subposts));
    }
}

export function subpost(subposts) {
    return{
        type:"CHANGE_SUBPOSTS",
        subposts: subposts
    }
}

export function changeCurrentImage(currentImage){
    return (dispatch) =>{
        dispatch(currentImages(currentImage))
    }
}

export function currentImages(currentImage){
    return{
        type:"CHANGE_CURRENT_IMAGE",
        currentImage: currentImage
    }
}

export function changeLightboxIsOpen(lightboxIsOpen) {
    return (dispatch)=>{
        dispatch(lightboxesIsOpen(lightboxIsOpen))
    }
}

export function lightboxesIsOpen(lightboxIsOpen) {
    return{
        type: "CHANGE_LIGHTBOXES",
        lightboxIsOpen: lightboxIsOpen
    }
}

export function visiblePost(postId){
    return (dispatch) =>{
        dispatch(changeVisiblePost(postId));
    }
}

export function changeVisiblePost(postId){
    return{
        type:"VISIBLE_POST",
        isVisiblePost: true,
        isVisiblePosts: false,
        idPost: postId
    }
}

export function goToAlbum(idUser){
    return (dispatch) =>{
        dispatch(changeIsVisibleAlbum(idUser))
    }
}

export function changeIsVisibleAlbum(idUser){
    return{
        type:"CHANGE_VISIBLE",
        flagForCheckAlbumInPosts: true,
        isVisiblePosts: false,
        activeUserId: idUser,
        flagForCheckPageCommentsOrProfile: true
    }
}

export function visiblePosts() {
    return (dispatch) =>{
        dispatch(returnInInitialStatePosts());
    }
}

export function returnInInitialStatePosts(){
    return{
        type:"POSTS_VISIBLE",
        isVisiblePosts: true,
        isVisiblePost: false,
        flagForCheckAlbumInPosts: false
    }
}

export function returnInInitialState(){
    return (dispatch) =>{
        dispatch(changeInitialState());
    }
}

export function changeInitialState(){
    return{
        type:"CHANGE_IN_INITIAL_STATE_IMAGES",
        posts: [],
        subPosts:[],
        isVisiblePosts: false
    }
}

export function changeRegistrationUser(flag){
    return (dispatch)=>{
        dispatch(defineUser(flag))
    }
}

export function defineUser(flag) {
    debugger;
    var flagForVisibleProfile = false;
    if(flag)
        flagForVisibleProfile = true;
    return{
        type:"CHANGE_REGISTR_USER",
        isRegistrationUser: flag,
        isVisibleProfile: flagForVisibleProfile
    }
}

export function changeVisibleAuthorization(){
    return (dispatch)=>{
        dispatch(visibleAuthorization())
    }
}

export function visibleAuthorization() {
    return{
        type:"VISIBLE_AUTHORIZATION",
        isVisibleAuthorization: true,
        isVisiblePosts: false
    }
}

export function returnInInitialStatePages(){
    debugger;
    return (dispatch) =>{
        dispatch(initialState())
    }
}

export function initialState() {
    return{
        type:"CHANGE_INITIAL_STATE_POSTS",
        isVisibleAlbum: false,
        isVisiblePosts: true,
        isVisiblePost: false
    }
}