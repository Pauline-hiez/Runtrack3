<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
</head>

<body>

    <form id="filterForm">
        <input name="id" type="text" placeholder="ID">
        <input name="nom" type="text" placeholder="Nom">
        <select name="type">
            <option value="">Type</option>
        </select>
        <input name="filtrer" type="button" value="Filtrer">
    </form>
    <div class="results" id="results"></div>

    <style>
        input,
        select {
            border-radius: 10px;
            padding: 5px;
        }
    </style>

    <script src="./script.js"></script>
</body>

</html>