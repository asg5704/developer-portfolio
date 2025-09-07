use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[derive(Serialize, Deserialize)]
pub struct Project {
    pub name: String,
    pub description: String,
    pub technologies: Vec<String>,
    pub github_url: String,
    pub demo_url: Option<String>,
}

#[derive(Serialize, Deserialize)]
pub struct Skill {
    pub name: String,
    pub level: u8, // 1-10
    pub category: String,
}

#[wasm_bindgen]
pub struct Portfolio {
    projects: Vec<Project>,
    skills: Vec<Skill>,
}

#[wasm_bindgen]
impl Portfolio {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Portfolio {
        console_log!("Portfolio WASM module initialized");
        
        let projects = vec![
            Project {
                name: "Portfolio Website".to_string(),
                description: "A modern portfolio built with Rust WASM, Svelte, and Vite".to_string(),
                technologies: vec!["Rust".to_string(), "WebAssembly".to_string(), "Svelte".to_string(), "Vite".to_string()],
                github_url: "https://github.com/yourusername/portfolio".to_string(),
                demo_url: Some("https://yourportfolio.dev".to_string()),
            },
            Project {
                name: "Task Manager".to_string(),
                description: "A productivity app with real-time collaboration features".to_string(),
                technologies: vec!["TypeScript".to_string(), "React".to_string(), "Node.js".to_string(), "PostgreSQL".to_string()],
                github_url: "https://github.com/yourusername/task-manager".to_string(),
                demo_url: None,
            },
        ];

        let skills = vec![
            Skill {
                name: "Rust".to_string(),
                level: 8,
                category: "Systems Programming".to_string(),
            },
            Skill {
                name: "JavaScript/TypeScript".to_string(),
                level: 9,
                category: "Web Development".to_string(),
            },
            Skill {
                name: "Svelte".to_string(),
                level: 7,
                category: "Frontend Framework".to_string(),
            },
            Skill {
                name: "WebAssembly".to_string(),
                level: 6,
                category: "Web Technologies".to_string(),
            },
        ];

        Portfolio { projects, skills }
    }

    #[wasm_bindgen]
    pub fn get_projects(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.projects).unwrap()
    }

    #[wasm_bindgen]
    pub fn get_skills(&self) -> JsValue {
        serde_wasm_bindgen::to_value(&self.skills).unwrap()
    }

    #[wasm_bindgen]
    pub fn calculate_experience_years(&self) -> u32 {
        // Simple calculation based on current date
        // In a real app, you'd want to pass the current date from JS
        5 // Placeholder: 5 years of experience
    }

    #[wasm_bindgen]
    pub fn filter_projects_by_tech(&self, tech: &str) -> JsValue {
        let filtered: Vec<&Project> = self.projects
            .iter()
            .filter(|p| p.technologies.iter().any(|t| t.to_lowercase().contains(&tech.to_lowercase())))
            .collect();
        
        serde_wasm_bindgen::to_value(&filtered).unwrap()
    }

    #[wasm_bindgen]
    pub fn get_skills_by_category(&self, category: &str) -> JsValue {
        let filtered: Vec<&Skill> = self.skills
            .iter()
            .filter(|s| s.category.to_lowercase().contains(&category.to_lowercase()))
            .collect();
        
        serde_wasm_bindgen::to_value(&filtered).unwrap()
    }
}