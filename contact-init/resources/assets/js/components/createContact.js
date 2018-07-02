/* <form action="{{ route('new.store') }}" method="POST">
<fieldset>
    <legend>New Creation</legend>
    {{ csrf_field() }}
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{{ old('title') }}">
    </div>
    <div>
        <label for="content">Content</label>
        <input type="text" name="content" id="content" value="{{ old('content') }}">
    </div>
    <div>
        <label for="file">File</label>
        <input type="text" name="file" id="file" value="{{ old('file') }}">
    </div>
    <div>
        <input type="submit" value="Send">
    </div>
</fieldset>
</form> */