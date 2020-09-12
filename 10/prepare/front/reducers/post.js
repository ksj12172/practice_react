export const initialState = {
	mainPosts:[{
		id:1,
		// sequalize에서 다른 정보들과 합쳐줄 때 대문자로 바꿔줘서 대문자
		User:{
			id:1,
			nickname:'zerocho'
		},
		content:'첫 번째 게시글 #해시태그 #express',
		Images:[{
			src : 'https://img.hankyung.com/photo/201909/BF.20602111.1.jpg'
		},{
			src : 'https://img.vogue.co.kr/vogue/2019/07/style_5d23f90d9af37.png'
		},{
			src : 'https://file.mk.co.kr/meet/neds/2020/06/image_readtop_2020_619588_15923560384244181.jpg'
		}],
		Comments: [{
			User:{
				nickname:'nero'
			},
			content:'오옹'
		}, {
			User:{
				nickname:'hero'
			},
			content:'보고싶다'
		}]
	}],
	imagePaths:[],
	postAdded:false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
	type:ADD_POST,
}
const dummyPost = {
	id:12,
	// sequalize에서 다른 정보들과 합쳐줄 때 대문자로 바꿔줘서 대문자
	User:{
		id:2,
		nickname:'zerocho'
	},
	content:'첫 번째 게시글 #해시태그 #express',
	Images:[{
		src : 'https://img.hankyung.com/photo/201909/BF.20602111.1.jpg'
	},{
		src : 'https://img.vogue.co.kr/vogue/2019/07/style_5d23f90d9af37.png'
	},{
		src : 'https://file.mk.co.kr/meet/neds/2020/06/image_readtop_2020_619588_15923560384244181.jpg'
	}],
	Comments: []
}

const reducer = (state=initialState, action) => {
    switch ( action.type ) {
			case ADD_POST:
				return {
					...state,
					// 새로 추가한 포스트가 앞에 뜨게 하기
					mainPosts:[dummyPost, ...state.mainPosts],
					postAdded:true
				}
			default:
				return state;
    }
}

export default reducer;