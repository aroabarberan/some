<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<table>
        <tr>
            <!-- <th><a href="{{ route('index', ['sort' => 'title_asc']) }}">Title</a></th> -->
            <th><a href=>Title</a></th>
            <th><a href=>Content</a></th>
            <!-- <th><a href="{{ route('index', ['sort' => 'content_asc']) }}">Content</a></th> -->
        </tr>
        @foreach($notes as $note)
            <tr>
                <td>{{ $note->title }}</td>
                <td>{{ $note->content }}</td>
            </tr>
        @endforeach
    </table>
</body>
</html>