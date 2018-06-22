<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>
<body>

<httpProtocol>
    <customHeaders>
        <add name="Access-Control-Allow-Origin" value="*" />
    </customHeaders>
</httpProtocol>
<!-- <table>
    <tr>
        <th><a href=>Id</a></th>
        <th><a href=>Title</a></th>
        <th><a href=>Content</a></th>
    </tr>
    @foreach($notes as $note)
        <tr>
            <td>{{ $note->id }}</td>
            <td>{{ $note->title }}</td>
            <td>{{ $note->content }}</td>
        </tr>
    @endforeach
</table> -->
<pre>{{ $json }}</pre>

</body>
</html>
