
function AddInquiry(){
return(
    <dl>
      <dt>고객이름</dt>
      <dd>
        <input type="text" />
      </dd>
      <dt>제목</dt>
      <dd>
        <input type="text" />
      </dd>
      <dt>등록일</dt>
      <dd>
        <input type="date" />
      </dd>
      <dt>내용</dt>
      <dd>
        <textarea rows="5" cols="22"></textarea>
      </dd>
      <dd>
      <button type="button">추가</button>
      </dd>
    </dl>

)
}

export default AddInquiry;