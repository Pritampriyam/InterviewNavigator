import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api"
import { useContext, useEffect } from "react"
import { InterviewContext } from "../interview.context"
import { useParams } from "react-router"


export const useInterview = () => {

    const context = useContext(InterviewContext)
    const { interviewId } = useParams()

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const { loading, setLoading, report, setReport, reports, setReports } = context

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        console.log("[useInterview] generateReport start", { jobDescription, selfDescription, resumeFile })
        setLoading(true)
        let response = null
        try {
            response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
            console.log("[useInterview] generateReport response", response)
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (error) {
            console.error("[useInterview] generateReport error", error)
            return null
        } finally {
            setLoading(false)
            console.log("[useInterview] generateReport finished")
        }
    }

    const getReportById = async (interviewId) => {
        console.log("[useInterview] getReportById start", { interviewId })
        setLoading(true)
        let response = null
        try {
            response = await getInterviewReportById(interviewId)
            console.log("[useInterview] getReportById success", response)
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (error) {
            console.error("[useInterview] getReportById error", error)
            return null
        } finally {
            setLoading(false)
            console.log("[useInterview] getReportById finished")
        }
    }

    const getReports = async () => {
        console.log("[useInterview] getReports start")
        setLoading(true)
        let response = null
        try {
            response = await getAllInterviewReports()
            console.log("[useInterview] getReports success", response)
            setReports(response.interviewReports)
            return response.interviewReports
        } catch (error) {
            console.error("[useInterview] getReports error", error)
            return []
        } finally {
            setLoading(false)
            console.log("[useInterview] getReports finished")
        }
    }

    const getResumePdf = async (interviewReportId) => {
        console.log("[useInterview] getResumePdf start", { interviewReportId })
        setLoading(true)
        let response = null
        try {
            response = await generateResumePdf({ interviewReportId })
            console.log("[useInterview] getResumePdf success", response)
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
        }
        catch (error) {
            console.error("[useInterview] getResumePdf error", error)
        } finally {
            setLoading(false)
            console.log("[useInterview] getResumePdf finished")
        }
    }

    useEffect(() => {
        if (interviewId) {
            getReportById(interviewId)
        } else {
            getReports()
        }
    }, [ interviewId ])

    return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf }

}