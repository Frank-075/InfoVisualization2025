// Custom Plotly renderer for Jupyter Book
(function() {
    function renderPlotlyOutputs() {
        // Find all script tags with plotly JSON
        var scripts = document.querySelectorAll('script[type="application/vnd.plotly.v1+json"]');
        
        scripts.forEach(function(script, index) {
            try {
                var plotlyData = JSON.parse(script.textContent);
                
                // Create a div for the plot
                var plotDiv = document.createElement('div');
                plotDiv.id = 'plotly-div-' + index;
                plotDiv.style.width = '100%';
                plotDiv.style.height = '500px';
                
                // Insert the div after the script
                script.parentNode.insertBefore(plotDiv, script.nextSibling);
                
                // Render the plot
                if (typeof Plotly !== 'undefined') {
                    Plotly.newPlot(plotDiv.id, plotlyData.data, plotlyData.layout, plotlyData.config);
                }
            } catch (e) {
                console.log('Error rendering Plotly plot:', e);
            }
        });
    }
    
    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Wait a bit for Plotly to load
            setTimeout(renderPlotlyOutputs, 1000);
        });
    } else {
        setTimeout(renderPlotlyOutputs, 1000);
    }
})(); 