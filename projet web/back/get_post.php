<?php
// get_post.php
require 'db.php';

// Vérifie si l'identifiant du post est passé en paramètre GET
if(isset($_GET['id'])) {
    $post_id = $_GET['id'];

    // Prépare la requête SQL pour récupérer les détails du post avec l'identifiant spécifié
    $sql = "SELECT * FROM posts WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $post_id]);
    $post = $stmt->fetch(PDO::FETCH_ASSOC);

    // Vérifie si le post a été trouvé dans la base de données
    if($post) {
        // Renvoie les détails du post au format JSON
        echo json_encode($post);
    } else {
        // Renvoie une réponse 404 Not Found si le post n'est pas trouvé
        http_response_code(404);
        echo json_encode(array("message" => "Post not found."));
    }
} else {
    // Renvoie une réponse 400 Bad Request si aucun identifiant de post n'est fourni
    http_response_code(400);
    echo json_encode(array("message" => "Missing post ID parameter."));
}
?>
