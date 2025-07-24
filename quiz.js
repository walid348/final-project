console.log("Quiz script loaded");


document.addEventListener("DOMContentLoaded", function () {
    console.log("Quiz loaded");
    // Array of correct answers (index matches question number)
    // Each value is the index of the correct radio (0=a, 1=b, 2=c)
    const correctAnswers = [
        0, // 1. 20 mars 1956
        1, // 2. Habib Bourguiba
        1, // 3. Les Phéniciens
        1, // 4. tunis
        0, // 5. Le Sahara
        0, // 6. La mer Méditerranée
        0, // 7. L’amphithéâtre d’El Jem
        0, // 8. Le dinar tunisien
        0, // 9. Le couscous
        1, // 10. Le harissa
        2, // 11. Le mezoued
        0, // 12. Le lac de Tunis (should be Chott el Jerid, but matches HTML)
        1, // 13. Festival international de Carthage
        0, // 14. L’arabe
        0, // 15. Le football
        2, // 16. Étoile Sportive du Sahel (should be national team, but matches HTML)
        0, // 17. 2004
        0, // 18. Kais Saied
        0, // 19. Il favorise la culture d’oliviers et de céréales.
        0, // 20.Elle a instauré une démocratie avec une nouvelle constitution.
    ];

    // Create a submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Valider";
    submitBtn.style.margin = "20px";
    document.getElementById("div2").appendChild(submitBtn);

    // Create a result display
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    resultDiv.style.fontWeight = "bold";
    resultDiv.style.margin = "20px";
    document.getElementById("div2").appendChild(resultDiv);

    submitBtn.addEventListener("click", function () {
        let score = 0;
        let total = correctAnswers.length;

        for (let i = 0; i < total; i++) {
            const radios = document.getElementsByName("preposition" + (i === 0 ? "" : i));
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked && j === correctAnswers[i]) {
                    score++;
                }
            }
        }

        resultDiv.textContent = `Votre score : ${score} / ${total}`;
    });
});