import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
console.log("[Interview API] API_BASE_URL", API_BASE_URL)

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})


/**
 * @description Service to generate interview report based on user self description, resume and job description.
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    console.log("[Interview API] generateInterviewReport called", { jobDescription, selfDescription, resumeFile })
    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumeFile)
    const response = await api.post("/api/interview/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    console.log("[Interview API] generateInterviewReport success", response.data)
    return response.data
}


/**
 * @description Service to get interview report by interviewId.
 */
export const getInterviewReportById = async (interviewId) => {
    console.log("[Interview API] getInterviewReportById called", { interviewId })
    const response = await api.get(`/api/interview/report/${interviewId}`)
    console.log("[Interview API] getInterviewReportById success", response.data)
    return response.data
}


/**
 * @description Service to get all interview reports of logged in user.
 */
export const getAllInterviewReports = async () => {
    console.log("[Interview API] getAllInterviewReports called")
    const response = await api.get("/api/interview/")
    console.log("[Interview API] getAllInterviewReports success", response.data)
    return response.data
}


/**
 * @description Service to generate resume pdf based on user self description, resume content and job description.
 */
export const generateResumePdf = async ({ interviewReportId }) => {
    console.log("[Interview API] generateResumePdf called", { interviewReportId })
    const response = await api.post(`/api/interview/resume/pdf/${interviewReportId}`, null, {
        responseType: "blob"
    })
    console.log("[Interview API] generateResumePdf success")
    return response.data
}